import React from 'react';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            isDone: this.props.isDone,
            expTime: this.props.expTime,
            speTime: this.props.speTime,
            taskMode: 'Show'
        }
    }
    render() {
        let task = '';
        switch(this.state.taskMode){
            case "New":
                task = <span className="p-todoList__add"><i className="fas fa-plus"></i>TODOを追加</span>;
                break;
        }
        return (
            <div>
                {task}
            </div>
        );
    }
}