import React from 'react';

import TaskList from './TaskList';

export default class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoData: {}
        }
    }
    render() {
        return (
            <ul className="p-todoList__list">
                
            </ul>
        );
    }
}