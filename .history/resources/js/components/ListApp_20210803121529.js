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
            todos: []
        }
        this.handleChangeBoard = this.handleChangeBoard.bind(this);
        this.callBackAddList = this.callBackAddList.bind(this);
    }
    componentDidMount() {
        this.setState({
            u_id: u_id,
            boardData: board,
            b_id: board['id'],
            board_name: board['board_name'],
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
                console.log(res);
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
    render() {
        return (
            <div>
                <ListHead text={this.state.board_name} onChangeBoard={this.handleChangeBoard} />
                <ListTodo onAddList={this.callBackAddList} clusters={this.state.clusters} todos={this.state.todos} />
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}