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
            speSecond: 0,
            taskMode: this.props.taskMode,
            upTimer: false
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
        this.handleResetTimer = this.handleResetTimer.bind(this);
        this.handleUpTime = this.handleUpTime.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
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
    handleChangeExpTime(e) {
        this.setState({
            expTime: e.target.value
        });
    }
    handleChangeExpMinute(e) {
        this.setState({
            expMinute: e.target.value
        });
    }
    handleChangeSpeTime(e) {
        this.setState({
            speTime: e.target.value
        });
    }
    handleChangeSpeMinute(e) {
        this.setState({
            speMinute: e.target.value
        });
    }
    handleUpTime() {
        const todoData = {id: this.state.id, expTime: parseInt(this.state.expTime), expMinute: parseInt(this.state.expMinute), speTime: parseInt(this.state.speTime), speMinute: parseInt(this.state.speMinute)};
        this.props.onUpTime(todoData);
    }
    handleResetTimer() {
        // 実行時間をリセットする
        this.setState({
            speTime: 0,
            speMinute: 0,
            speSecond: 0
        });
        clearInterval(this.timer);
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
    startTimer() {
        this.setState({
            isTimer: true
        });
        this.timer = setInterval(() => this.updateTimer(), 1000);
    }
    stopTimer() {
        this.setState({
            isTimer: false
        });
        clearInterval(this.timer);
    }
    updateTimer() {
        // 元々、登録されている時間と1秒を time 定数に加算する
        const time = (this.state.speTime * 60 * 60) + (this.state.speMinute * 60) + this.state.speSecond + 1;
        const hours = parseInt(time / 60 / 60, 10);
        const minutes = parseInt(time / 60 % 60, 10);
        const seconds = parseInt(time % 60, 10);
        this.setState({
            speTime: hours,
            speMinute: minutes,
            speSecond: seconds
        });
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
            <p onClick={this.stopTimer} className="c-timer__btn u-bgColor--error">STOP</p>
            <p onClick={this.handleResetTimer} className="c-timer__btn u-bgColor--success">RESET</p>
        </div>: 
        <div className="c-timer">
            <p onClick={this.startTimer} className="c-timer__btn u-bgColor--primary">START</p>
            <p onClick={this.handleResetTimer} className="c-timer__btn u-bgColor--success">RESET</p>
        </div>;
        // 予想時間、実行時間が保存されたかどうか通知する
        const timeMsg = <p className="u-margin--m-0">成功</p>;
        // Taskの状態から要素を分ける
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
                                <button onClick={this.handleUpTime} className="p-todoList__submit u-bgColor--accent c-component__item"><i className="fas fa-arrow-circle-up"></i>&nbsp;予想・作業時間保存</button>
                                {timeMsg}
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