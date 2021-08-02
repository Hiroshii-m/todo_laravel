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
            board_name: ''
        }
        this.handleChangeBoard = this.handleChangeBoard.bind(this);
    }
    componentDidMount() {
        this.setState({
            u_id: u_id,
            boardData: board,
            b_id: board['id'],
            board_name: board['board_name']
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
    render() {
        return (
            <div>
                <ListHead text={this.state.board_name} onChangeBoard={this.handleChangeBoard} />
                <ListTodo />
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}