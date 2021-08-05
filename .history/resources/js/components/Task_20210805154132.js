import React from 'react';
import classNames from 'classnames';

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
        this.handleNew = this.handleNew.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.handleToggleDone = this.handleToggleDone.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.props.isDone != nextProps.isDone) {
            this.setState({
                isDone: nextProps.isDone
            });
        }
    } 
    handleNew() {
        this.setState({
            taskMode: "New"
        });
    }
    handleInput() {
        this.setState({
            taskMode: "Input"
        });
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    handleEdit() {
        this.setState({
            taskMode: "Edit"
        });
    }
    handleCloseEdit() {
        const todoData = {id: this.state.id, text: this.state.text};
        this.props.onUpTodo(todoData);
        this.setState({
            taskMode: "Show"
        });
    }
    handleToggleDone() {
        const todoData = {id: this.state.id, isDone: !this.state.isDone};
        this.props.onToggleDone(todoData);
    }
    addTodo() {
        if(this.state.text) {
            const todoData = {id: this.state.id, c_id: this.props.c_id, text: this.state.text};
            this.props.onAddTodo(todoData);
            this.setState({
                taskMode: "New",
                text: ''
            });
        }
    }
    removeTodo() {
        this.props.onRemoveTodo(this.state.id);
    }
    render() {
        let task = '';
        const classNameIcon = classNames({
            'far': true,
            'p-todoList__icon': true,
            'fa-check-square': this.state.isDone,
            'fa-square': !this.state.isDone
        });

        // expTime、speTimeがあれば、それぞれ、「分」のデータを「時間：分」に直す
        let expHour = Math.floor(this.state.expTime/60);
        let expMin = this.state.expTime - (expHour * 60);
        let speHour = Math.floor(this.state.speTime/60);
        let speMin = this.state.expTime - (speHour * 60);
        
        if(Number.isInteger(this.state.expTime)) {
            console.log(this.state.expTime);
        }
        // console.log(expHour);
        // console.log(expMin);
        // console.log(speHour);
        // console.log(speMin);
        

        switch(this.state.taskMode){
            case "New":
                task = <span onClick={this.handleInput} className="p-todoList__add"><i className="fas fa-plus"></i>&nbsp;TODOを追加</span>;
                break;
            case "Input":
                task = 
                <div>
                    <input type="text" className="p-todoList__input u-margin--m-0 c-component__item" placeholder="TODO名" value={this.state.text} onChange={this.handleChange} />
                    <div className="p-todoList__bottom">
                        <span onClick={this.addTodo} className="p-todoList__btn u-bgColor--primary c-component__item"><i className="fas fa-plus"></i>TODOを追加</span>
                        <i onClick={this.handleNew} className="far fa-times-circle p-todoList__icon u-margin-left--m"></i>
                    </div>
                </div>;
                break;
            case "Show":
                task = 
                <div className="">
                    <div className="p-todoList__todo">
                        <i onClick={this.handleToggleDone} className={classNameIcon}></i>
                        <span onClick={this.handleEdit} className="p-todoList__text">{this.state.text}</span>
                    </div>
                    <div className="c-acd">
                        <input className="c-acd__check" type="checkbox" />
                        <div className="c-acd__content p-todoList__acd">
                            <div onClick={this.handleEdit} className="c-acd__item">
                                <i className="far fa-edit p-todoList__icon"></i>
                                <p className="c-acd__text">編集</p>
                            </div>
                            <div onClick={this.removeTodo} className="c-acd__item">
                                <i className="far fa-trash-alt p-todoList__icon"></i>
                                <p className="c-acd__text">削除</p>
                            </div>
                            <div className="c-acd__time">
                                <p>予想時間：<input type="time" /></p>
                                <p>作業時間：<input type="time" defaultValue="00:00" /></p>
                                <div className="c-timer">
                                    <p className="c-timer__btn u-bgColor--primary">START</p>
                                    <p className="c-timer__btn u-bgColor--error">STOP</p>
                                    <p className="c-timer__btn u-bgColor--success">RESET</p>
                                </div>
                            </div>
                        </div>
                        <i className="fas fa-chevron-down p-todoList__icon p-todoList__acon c-acd__icon c-acd__down"></i>
                        <i className="fas fa-chevron-up p-todoList__icon p-todoList__acon c-acd__icon c-acd__up"></i>
                    </div>
                </div>;
                break;
            case "Edit":
                task = 
                <div className="p-todoList__edit">
                    <i className="far fa-square p-todoList__icon"></i>
                    <input type="text" className="p-todoList__input" placeholder="TODO名" value={this.state.text} onChange={this.handleChange}  />
                    <button onClick={this.handleCloseEdit} className="p-todoList__btn u-bgColor--primary"><i className="fas fa-arrow-circle-up"></i></button>
                </div>
                break;
        }
        return (
            <div>
                {task}
            </div>
        );
    }
}