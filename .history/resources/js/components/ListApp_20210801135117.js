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
        const url = window.location.href;
        const index = url.split("/").indexOf('lists');
        console.log(url);
        console.log(index);
        const arr = url.split("/");
        const board_id = arr[index + 1];
        // 取得したidからaxiosでボード名を取得
        axios.
            get('/api/getboard/' + board_id)
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