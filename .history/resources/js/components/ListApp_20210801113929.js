import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ListHead from './ListHead';
import ListTodo from './ListTodo';

export default class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardName: ''
        }
    }
    componentDidMount() {
        // URLのパラメータからboardのidを取得
        const url = new URL(window.location.href);
        const param = url.searchParams;
        const board_id = param.get('id');
        console.log(board_id);
        // 取得したidからaxiosでボード名を取得
        axios.
            get('/api/getboard' + board_id)
            .then( res => {
                this.setState({
                    boardName: res
                });
            })
            .catch( err => {
                console.log(err);
            })
    }
    render() {
        return (
            <div>
                <ListHead />
                <ListTodo />                
            </div>
        );
    }
}

if (document.querySelector("#list-app")) {
    ReactDOM.render(<ListApp />, document.getElementById('list-app'));
}