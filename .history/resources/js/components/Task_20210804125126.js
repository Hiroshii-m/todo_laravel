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
            taskMode: this.props.taskMode
        }
    }
    render() {
        let task = '';
        switch(this.state.taskMode){
            case "New":
                task = <span className="p-todoList__add"><i className="fas fa-plus"></i>TODOを追加</span>;
                break;
            case "Input":
                task = 
                <div>
                    <input type="text" className="p-todoList__input" placeholder="TODO名" />
                    <div className="p-todoList__bottom">
                        <span className="p-todoList__btn u-bgColor--primary"><i className="fas fa-plus"></i>TODOを追加</span>
                        <i className="far fa-times-circle p-todoList__icon"></i>
                    </div>
                </div>;
                break;
        }
        return (
            <div>
                {task}
            </div>
        );
    }
}