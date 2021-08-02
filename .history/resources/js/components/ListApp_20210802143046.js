import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ListHead from './ListHead';
import ListTodo from './ListTodo';

export default class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardData: {},
            u_id: null
        }
        this.handleChangeBoard = this.handleChangeBoard.bind(this);
    }
    componentDidMount() {
        this.setState({
            u_id: u_id,
            boardData: data
        });
        // リストとTODOタスクを取得する
    }
    handleChangeBoard(text) {
        // ボード名をDBへ送信
        axios
            .post('/api/upboard', {
                b_id: this.state.boardData['id'],
                u_id: this.state.u_id,
                text: text
            })
            // データ送信が成功したら、ListAppの値を更新
            .then( res => {
                this.setState({
                    boardData: {
                        board_name: text
                    }
                })
            })
            .catch( err => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <ListHead text={this.state.boardData['board_name']} onChangeBoard={this.handleChangeBoard} />
                <ListTodo />
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}