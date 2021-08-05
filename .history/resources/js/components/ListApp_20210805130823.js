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
            .post('/api/upboard', {
                b_id: this.state.b_id,
                u_id: this.state.u_id,
                text: text
            })
            // データ送信が成功したら、ListAppの値を更新
            .then( res => {
                this.setState({
                    board_name: text
                });
            })
            .catch( err => {
                console.log(err);
            });
    }
    callBackAddList(text) {
        // テキストをクラスターテーブル（リスト）に追加
        axios
            .post('/api/newcluster', {
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
    callBackUpList(updata) {
        // クラスターテーブル（リスト）のテキストを変更
        axios
            .post('/api/upcluster', {
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
    callBackRemoveList(id) {
        if(confirm('本当に削除しますか')) {
            axios
                .post('/api/delcluster', {
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
    callBackAddTodo(todoData) {
        axios
            .post('/api/createtodo', {
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
    callBackUpTodo(todoData) {
        // TODOのテキストを変更
        axios
            .post('/api/uptodo', {
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
    render() {
        return (
            <div>
                <ListHead text={this.state.board_name} onChangeBoard={this.handleChangeBoard} />
                <ListTodo onAddList={this.callBackAddList} clusters={this.state.clusters} todos={this.state.todos} word={this.state.word} onUpList={this.callBackUpList} onRemoveList={this.callBackRemoveList} onAddTodo={this.callBackAddTodo} onUpTodo={this.callBackUpTodo} onRemoveTodo={this.callBackRemoveTodo} onToggleDone={this.callBackToggleDone} />
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}