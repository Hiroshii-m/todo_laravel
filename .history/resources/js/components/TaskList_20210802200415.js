import React from 'react';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListMode: 'Input'
        }
    }
    render() {

        switch(this.state.ListMode) {
            case 'New':
                const head = '';
                break;
            case 'Input':
                const head = <span className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                break;
        }
        return (
            {task}
        );
    }
}