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
            listMode: "New"
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
    render() {
        let head = '';
        let bottom = '';
        let todos = [];
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
                    <div onClick={this.handleEdit} className="p-todoList__name u-justify-content--space-between">
                        <span className="u-margin--0-m">{this.state.text}</span>
                        <i className="far fa-edit"></i>
                    </div>
                    <p>{this.props.word['ExpTime']}：5時間</p>
                    <p>{this.props.word['SpeTime']}：10時間10分</p>
                    <p>{this.props.word['TimeLug']}：+5時間10分</p>
                </div>;
                bottom = <div>
                    <Task taskMode={'New'} />
                    <div className="p-todoList__bottom">
                        <button onClick={this.removeList} className="p-todoList__btn c-component__item u-margin-right--xl u-padding--s-m u-bgColor--error">リストを削除</button>
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
                    <p>{this.props.word['ExpTime']}：5時間</p>
                    <p>{this.props.word['SpeTime']}：10時間10分</p>
                    <p>{this.props.word['TimeLug']}：+5時間10分</p>
                </div>;
                bottom = '';
                break;
            default:
                console.log('listMode:default');
        }
        for(let i in this.props.todos) {
            todos.push(<Task    key={this.props.todos[i].id}
                                id={this.props.todos[i].id}
                                text={this.props.todos[i].todo_name}
                                isDone={this.props.todos[i].done_flg}
                                expTime={this.props.todos[i].expect_time}
                                speTime={this.props.spend_time}
                                taskMode={'Show'} />);
        }
        return (
            <li className="p-todoList__item">
                {head}
                {bottom}
                {todos}
            </li>
        );
    }
}