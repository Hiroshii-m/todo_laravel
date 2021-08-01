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
    }
    componentDidMount() {
        // URLのパラメータからboardのidを取得
        const arr = window.location.href.split("/");
        const index = arr.indexOf('lists');
        const board_id = arr[index + 1];
        const u_id = arr[index + 2];
        this.setState({
            u_id: Number(u_id)
        });
        
        // 取得したidからaxiosでボード名を取得
        axios.
            get('/api/getboard/' + board_id + '/' + u_id)
            .then( res => {
                this.setState({
                    boardData: res.data.data
                });
            })
            .catch( err => {
                console.log(err);
            })
    }
    handleChangeBoard(text) {
        this.setState({
            boardData: {
                text: text
            }
        })
    }
    render() {
        return (
            <div>
                <ListHead id={this.state.boardData['id']} text={this.state.boardData['board_name']} u_id={this.state.u_id} onChangeBoard={this.handleChangeBoard} />
                <ListTodo />                
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}