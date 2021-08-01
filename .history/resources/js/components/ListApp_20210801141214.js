import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ListHead from './ListHead';
import ListTodo from './ListTodo';

export default class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardData: []
        }
    }
    componentDidMount() {
        // URLのパラメータからboardのidを取得
        const arr = window.location.href.split("/");
        const index = arr.indexOf('lists');
        const board_id = arr[index + 1];
        
        // 取得したidからaxiosでボード名を取得
        axios.
            get('/api/getboard/' + board_id)
            .then( res => {
                this.setState({
                    boardData: res.data
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