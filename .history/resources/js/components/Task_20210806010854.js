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
            expMinute: this.props.expMinute,
            speTime: this.props.speTime,
            speMinute: this.props.speMinute,
            taskMode: this.props.taskMode,
            isTimer: false
        }
        this.handleNew = this.handleNew.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.handleToggleDone = this.handleToggleDone.bind(this);
        this.handleChangeExpTime = this.handleChangeExpTime.bind(this);
        this.handleChangeExpMinute = this.handleChangeExpMinute.bind(this);
        this.handleChangeSpeTime = this.handleChangeSpeTime.bind(this);
        this.handleChangeSpeMinute = this.handleChangeSpeMinute.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.props.isDone != nextProps.isDone) {
            this.setState({
                isDone: nextProps.isDone
            });
        }
        if(this.props.expTime != nextProps.expTime) {
            this.setState({
                expTime: nextProps.expTime
            });
        }
        if(this.props.expMinute != nextProps.expMinute) {
            this.setState({
                expMinute: nextProps.expMinute
            });
        }
        if(this.props.speTime != nextProps.speTime) {
            this.setState({
                speTime: nextProps.speTime
            });
        }
        if(this.props.speMinute != nextProps.speMinute) {
            this.setState({
                speMinute: nextProps.speMinute
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
    handleChangeExpTime(e) {
        const todoData = {id: this.state.id, expTime: e.target.value};
        this.props.onChangeExpTime(todoData);
    }
    handleChangeExpMinute(e) {
        const todoData = {id: this.state.id, expMinute: e.target.value};
        this.props.onChangeExpMinute(todoData);
    }
    handleChangeSpeTime(e) {
        // this.setState({
        //     speTime: e.target.value
        // });
        const todoData = {id: this.state.id, speTime: e.target.value};
        this.props.onChangeSpeTime(todoData);
    }
    handleChangeSpeMinute(e) {
        // this.setState({
        //     speMinute: e.target.value
        // });
        const todoData = {id: this.state.id, speMinute: e.target.value};
        this.props.onChangeSpeMinute(todoData);
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
        const timer = (this.state.isTimer) ? 
        <div className="c-timer">
            <p className="c-timer__btn u-bgColor--error">STOP</p>
            <p className="c-timer__btn u-bgColor--success">RESET</p>
        </div>: 
        <div className="c-timer">
            <p className="c-timer__btn u-bgColor--primary">START</p>
            <p className="c-timer__btn u-bgColor--success">RESET</p>
        </div>;
        
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
                                <div className="">予想時間：
                                    <div className="p-todoList__time u-flex">
                                        <input className="p-todoList__timeInput" min="0" type="number" value={this.state.expTime} onChange={this.handleChangeExpTime} />:<input className="p-todoList__timeInput" type="number" min="0" max="59" value={this.state.expMinute} onChange={this.handleChangeExpMinute} />
                                    </div>
                                </div>
                                <div>作業時間：
                                    <div className="p-todoList__time u-flex">
                                        <input className="p-todoList__timeInput" min="0" type="number" value={this.state.speTime} onChange={this.handleChangeSpeTime} />:<input className="p-todoList__timeInput" type="number" min="0" max="59" value={this.state.speMinute} onChange={this.handleChangeSpeMinute} />
                                    </div>
                                </div>
                                {timer}
                                <span onClick={this.addTodo} className="p-todoList__btn p-todoList__submit u-bgColor--accent c-component__item"><i className="fas fa-arrow-circle-up"></i>予想・作業時間保存</span>
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