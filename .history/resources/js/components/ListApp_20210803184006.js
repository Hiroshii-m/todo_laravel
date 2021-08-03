import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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
                newData.push({key: res.data, id: res.data, cluster_name: text, ListMode: 'Show'});
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
            .then( res => {
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
        if(confirm('削除しますか')) {
            console.log('削除します');
        }else{
            console.log('削除しません');
        }
    }
    render() {
        return (
            <div>
                <ListHead text={this.state.board_name} onChangeBoard={this.handleChangeBoard} />
                <ListTodo onAddList={this.callBackAddList} clusters={this.state.clusters} todos={this.state.todos} word={this.state.word} onUpList={this.callBackUpList} onRemoveList={this.callBackRemoveList} />
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}