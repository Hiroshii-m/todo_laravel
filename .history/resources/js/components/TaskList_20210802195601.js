import React from 'react';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListMode: 'Input'
        }
    }
    render() {
        const task = 
        <li className="p-todoList__item">
            <span className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>
        </li>;
        switch(this.state.ListMode) {
            case 'New':
                const taskList = <span className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                break;
            case 'Input':
                const taskList = <span className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                break;
        }
        return (
            {task}
        );
    }
}