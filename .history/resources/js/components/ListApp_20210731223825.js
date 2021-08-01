import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import ListHead from './ListHead';
import ListTodo from './ListTodo';

export default class ListApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardName: ''
        }
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