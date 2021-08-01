import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ListHead from './ListHead';
import ListTodo from './ListTodo';

export default class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardData: [],
            u_id: ''
        }
    }
    componentDidMount() {
        // URLのパラメータからboardのidを取得
        const arr = window.location.href.split("/");
        const index = arr.indexOf('lists');
        const board_id = arr[index + 1];
        const u_id = arr[index + 2];
        this.setState({
            u_id: u_id
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
    render() {
        return (
            <div>
                <ListHead id={this.state.boardData['id']} text={this.state.boardData['board_name']} />
                <ListTodo />                
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}