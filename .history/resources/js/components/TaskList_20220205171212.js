import React from 'react';

import Task from './Task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            listMode: this.props.listMode
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleNew = this.handleNew.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.addList = this.addList.bind(this);
        this.removeList = this.removeList.bind(this);
        this.callBackAddTodo = this.callBackAddTodo.bind(this);
        this.callBackUpTodo = this.callBackUpTodo.bind(this);
        this.callBackRemoveTodo = this.callBackRemoveTodo.bind(this);
        this.callBackToggleDone = this.callBackToggleDone.bind(this);
        this.callBackUpTime = this.callBackUpTime.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.props.text !== nextProps.text) {
            this.setState({
                text: nextProps.text
            });
        }
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        });
    }
    handleInput() {
        this.setState({
            listMode: "Input"
        });
    }
    handleNew() {
        this.setState({
            listMode: "New",
            text: ''
        });
    }
    handleEdit() {
        this.setState({
            listMode: "Edit"
        });
    }
    handleCloseEdit() {
        const updata = {id: this.state.id, cluster_name: this.state.text};
        this.props.onUpList(updata);
        this.setState({
            listMode: "Show"
        });
    }
    addList() {
        this.props.onAddList(this.state.text);
        this.setState({
            text: '',
            listMode: "New"
        });
    }
    removeList() {
        this.props.onRemoveList(this.state.id);
    }
    callBackAddTodo(todoData) {
        this.props.onAddTodo(todoData);
    }
    callBackUpTodo(todoData) {
        this.props.onUpTodo(todoData);
    }
    callBackRemoveTodo(id) {
        this.props.onRemoveTodo(id);
    }
    callBackToggleDone(todoData) {
        this.props.onToggleDone(todoData);
    }
    callBackUpTime(todoData) {
        this.props.onUpTime(todoData);
    }
    render() {
        let head = '';
        let bottom = '';
        let todos = [];
        const newTask = <Task id={'n'} c_id={this.props.id} text={''} taskMode={'New'} onAddTodo={this.callBackAddTodo} 
        onUpTodo={this.callBackUpTodo} onRemoveTodo={this.callBackRemoveTodo} onToggleDone={this.callBackToggleDone} 
        onUpTime={this.callBackUpTime} />;
        // TODOの予想時間を全て加算する
        let expTimeTotal = 0;
        let expMinuteTotal = 0;
        let speTimeTotal = 0;
        let speMinuteTotal = 0;
        let timeLug = 0;
        let minuteLug = 0;
        for(let i in this.props.todos) {
            expTimeTotal += (!isNaN(this.props.todos[i].expect_time)) ? this.props.todos[i].expect_time : 0;
            expMinuteTotal += (!isNaN(this.props.todos[i].expect_minute)) ? this.props.todos[i].expect_minute: 0;
            speTimeTotal += (!isNaN(this.props.todos[i].spend_time)) ? this.props.todos[i].spend_time : 0;
            speMinuteTotal += (!isNaN(this.props.todos[i].spend_minute)) ? this.props.todos[i].spend_minute: 0;
        }

        // 予想時間の合計を時間と分に直す。
        // 時間に60をかけ、分に加算する
        const expTotal = (expTimeTotal * 60) + expMinuteTotal;
        // 整数部分を時間、余りを分として整理する
        expTimeTotal = Math.floor(expTotal/60);
        expMinuteTotal = expTotal % 60;
        // 実行時間の合計を時間と分に直す。
        const speTotal = (speTimeTotal * 60) + speMinuteTotal;
        speTimeTotal = Math.floor(speTotal/60);
        speMinuteTotal = speTotal % 60;
        // タイムラグの計算
        const totalLug = expTotal - speTotal;
        timeLug = Math.floor(totalLug/60);
        // 分にマイナスはつけなくないので、絶対値を取得
        minuteLug = Math.abs(totalLug % 60);

        switch(this.state.listMode) {
            case 'New':
                head = <span onClick={this.handleInput} className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                bottom = '';
                break;
            case 'Input':
                head = 
                <div className="p-todoList__head">
                    <input type="text" className="p-todoList__input p-todoList__name" placeholder="リスト名" onChange={this.handleChange} value={this.state.text} />
                </div>;
                bottom = 
                <div className="p-todoList__bottom">
                    <button onClick={this.addList} className="p-todoList__btn c-component__item u-margin-right--xl u-padding--s-m u-bgColor--primary">リストを追加</button>
                    <i onClick={this.handleNew} className="far fa-times-circle p-todoList__icon"></i>
                </div>;
                break;
            case 'Show':
                head = 
                <div className="p-todoList__head">
                    <div className="p-todoList__name ">
                        <span onClick={this.handleEdit}  className="p-todoList__text">{this.state.text}</span>
                    </div>
                    <p>{this.props.word['ExpTime']}：{expTimeTotal}時間{expMinuteTotal}分</p>
                    <p>{this.props.word['SpeTime']}：{speTimeTotal}時間{speMinuteTotal}分</p>
                    <p>{this.props.word['TimeLug']}：{timeLug}時間{minuteLug}分</p>
                </div>;
                bottom = <div>
                    {newTask}
                    <div className="u-flex">
                        <button onClick={this.removeList} className="p-todoList__remove u-bgColor--error">
                            削除
                        </button>
                    </div>
                </div>;
                break;
            case 'Edit':
                head = 
                <div className="p-todoList__head">
                    <div className="p-todoList__name">
                        <input type="text" className="p-todoList__input" placeholder="リスト名" value={this.state.text} onChange={this.handleChange} />
                        <button onClick={this.handleCloseEdit} className="p-todoList__btn u-bgColor--primary"><i className="fas fa-arrow-circle-up"></i></button>
                    </div>
                    <p>{this.props.word['ExpTime']}：{expTimeTotal}時間{expMinuteTotal}分</p>
                    <p>{this.props.word['SpeTime']}：{speTimeTotal}時間{speMinuteTotal}分</p>
                    <p>{this.props.word['TimeLug']}：{timeLug}時間{minuteLug}分</p>
                </div>;
                bottom = <div>
                    {newTask}
                    <div className="u-flex">
                        <button onClick={this.removeList} className="p-todoList__remove u-bgColor--error">
                            削除
                        </button>
                    </div>
                </div>;
                break;
            default:
                console.log('listMode:default');
        }
        for(let i in this.props.todos) {
            // 予想時間、実行時間を数値か判定し、inputのvalueにnullが入らないようにする
            const expTime   = (Number.isInteger(this.props.todos[i].expect_time)) ? this.props.todos[i].expect_time : 0;
            const expMinute = (Number.isInteger(this.props.todos[i].expect_minute)) ? this.props.todos[i].expect_minute : 0;
            const speTime   = (Number.isInteger(this.props.todos[i].spend_time)) ? this.props.todos[i].spend_time : 0;
            const speMinute = (Number.isInteger(this.props.todos[i].spend_minute)) ? this.props.todos[i].spend_minute : 0;
            const timeMsg = (typeof this.props.todos[i].timeMsg !== 'undefined') ? this.props.todos[i].timeMsg : '';

            todos.push(<Task    key={this.props.todos[i].id}
                                id={this.props.todos[i].id}
                                c_id={this.props.id}
                                text={this.props.todos[i].todo_name}
                                isDone={this.props.todos[i].done_flg}
                                expTime={expTime}
                                expMinute={expMinute}
                                speTime={speTime}
                                speMinute={speMinute}
                                taskMode={'Show'}
                                timeMsg={timeMsg}
                                onAddTodo={this.callBackAddTodo}
                                onUpTodo={this.callBackUpTodo}
                                onRemoveTodo={this.callBackRemoveTodo}
                                onToggleDone={this.callBackToggleDone}
                                onUpTime={this.callBackUpTime} />);
        }
        return (
            <li className="p-todoList__item">
                {head}
                {todos}
                {bottom}
            </li>
        );
    }
}