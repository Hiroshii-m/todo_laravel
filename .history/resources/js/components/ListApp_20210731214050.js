import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

import ListHead from './ListHead';
import ListTodo from './ListTodo';

export default class ListApp extends Component {

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