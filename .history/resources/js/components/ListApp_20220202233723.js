import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import _ from 'lodash';

import ListHead from './ListHead';
import ListTodo from './ListTodo';

export default class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            u_id: null,
            b_id: null,
            board_name: '',
            clusters: [],
            todos: [],
            word: {}
        }
        this.handleChangeBoard = this.handleChangeBoard.bind(this);
        this.callBackAddList = this.callBackAddList.bind(this);
        this.callBackUpList = this.callBackUpList.bind(this);
        this.callBackRemoveList = this.callBackRemoveList.bind(this);
        this.callBackAddTodo = this.callBackAddTodo.bind(this);
        this.callBackUpTodo = this.callBackUpTodo.bind(this);
        this.callBackRemoveTodo = this.callBackRemoveTodo.bind(this);
        this.callBackToggleDone = this.callBackToggleDone.bind(this);
        this.callBackUpTime = this.callBackUpTime.bind(this);
    }
    componentDidMount() {
        this.setState({
            u_id: u_id,
            boardData: board,
            b_id: board['id'],
            board_name: board['board_name'],
            clusters: clusters,
            todos: todos,
            word: word
        });
    }
    handleChangeBoard(text) {
        // ボード名をDBへ送信
        axios
            .put('/api/boards', {
                b_id: this.state.b_id,
                u_id: this.state.u_id,
                text: text
            })
            // データ送信が成功したら、ListAppの値を更新
            .then( () => {
                this.setState({
                    board_name: text
                });
            })
            .catch( err => {
                console.log(err);
            });
    }
    // テキストをクラスターテーブル（リスト）に追加
    callBackAddList(text) {
        axios
            .post('/api/clusters', {
                board_id: this.state.b_id,
                user_id: this.state.u_id,
                cluster_name: text
            })
            .then( res => {
                let newData = this.state.clusters;
                newData.push({key: res.data, id: res.data, cluster_name: text, listMode: 'Show'});
                this.setState({
                    clusters: newData
                });
            })
            .catch( err => {
                console.log(err);
            });
    }
    // クラスター（TODOリスト）のテキストを変更
    callBackUpList(updata) {
        axios
            .put('/api/clusters', {
                user_id: this.state.u_id,
                id: updata['id'],
                cluster_name: updata['cluster_name']
            })
            .then( () => {
                this.setState(prevState => ({
                    clusters: prevState.clusters.map(
                        obj => (obj.id === updata['id'] ? Object.assign(obj, {cluster_name: updata['cluster_name']}): obj)
                    )
                }));
            })
            .catch( err => {
                console.log(err);
            })
    }
    // クラスター（TODOリスト）を削除
    callBackRemoveList(id) {
        if(confirm('本当に削除しますか')) {
            axios
                .delete('/api/clusters', {
                    id: id,
                    user_id: this.state.u_id
                })
                .then( () => {
                    // コンポーネントから削除
                    const data = _.reject(this.state.clusters, {'id': id});
                    this.setState({
                        clusters: data
                    });
                })
                .catch( err => {
                    console.log(err);
                })
        }
    }
    // TODOを新たに追加
    callBackAddTodo(todoData) {
        axios
            .post('/api/todos', {
                user_id: this.state.u_id,
                board_id: this.state.b_id,
                cluster_id: todoData['c_id'],
                todo_name: todoData['text']
            })
            .then( res => {
                let nextData = this.state.todos;
                nextData.push({id: res.data, cluster_id: todoData['c_id'], todo_name: todoData['text']});
                this.setState({
                    todos: nextData
                });
            })
            .catch( err => {
                console.log(err);
            })
    }
    // TODOのテキストを変更
    callBackUpTodo(todoData) {
        axios
            .patch('/api/todos', {
                user_id: this.state.u_id,
                id: todoData['id'],
                todo_name: todoData['text']
            })
            .then( () => {
                this.setState(prevState => ({
                    todos: prevState.todos.map(
                        obj => (obj.id === todoData['id'] ? Object.assign(obj, {todo_name: todoData['text']}): obj)
                    )
                }));
            })
            .catch( err => {
                console.log(err);
            })
    }
    callBackRemoveTodo(id) {
        if(confirm('本当に削除しますか')) {
            axios
                .post('/api/deltodo', {
                    id: id,
                    user_id: this.state.u_id
                })
                .then( () => {
                    const data = _.reject(this.state.todos, {'id': id});
                    this.setState({
                        todos: data
                    });
                })
                .catch( err => {
                    console.log(err);
                })
        }
    }
    callBackToggleDone(todoData) {
        // TODOの完了状態の変更を登録
        axios
            .post('/api/updonetodo', {
                user_id: this.state.u_id,
                id: todoData['id'],
                done_flg: todoData['isDone']
            })
            .then( () => {
                this.setState(prevState => ({
                    todos: prevState.todos.map(
                        obj => (obj.id === todoData['id'] ? Object.assign(obj, {done_flg: todoData['isDone']}): obj)
                    )
                }));
            })
            .catch( err => {
                console.log(err);
            })
    }
    callBackUpTime(todoData) {
        // 予想時間、実行時間をスキーマへ登録
        axios
            .post('/api/uptimetodo', {
                user_id: this.state.u_id,
                id: todoData['id'],
                expect_time: todoData['expTime'],
                expect_minute: todoData['expMinute'],
                spend_time: todoData['speTime'],
                spend_minute: todoData['speMinute']
            })
            .then( () => {
                this.setState(prevState => ({
                    todos: prevState.todos.map(
                        obj => (obj.id === todoData['id'] ? Object.assign(obj, {expect_time: todoData['expTime'], expect_minute: todoData['expMinute'], spend_time: todoData['speTime'], spend_minute: todoData['speMinute'], timeMsg: '保存に成功しました！！'}): obj)
                    )
                }));
            })
            .catch( err => {
                console.log(err);
                this.setState(prevState => ({
                    todos: prevState.todos.map(
                        obj => (obj.id === todoData['id'] ? Object.assign(obj, {timeMsg: '保存に失敗しました。しばらくお待ちください。'}): obj)
                    )
                }));
            })
    }
    render() {
        return (
            <div>
                <ListHead text={this.state.board_name} onChangeBoard={this.handleChangeBoard} />
                <ListTodo onAddList={this.callBackAddList} 
                            clusters={this.state.clusters} 
                            todos={this.state.todos} 
                            word={this.state.word} 
                            onUpList={this.callBackUpList} 
                            onRemoveList={this.callBackRemoveList} 
                            onAddTodo={this.callBackAddTodo} 
                            onUpTodo={this.callBackUpTodo} 
                            onRemoveTodo={this.callBackRemoveTodo} 
                            onToggleDone={this.callBackToggleDone}
                            onUpTime={this.callBackUpTime} />
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}