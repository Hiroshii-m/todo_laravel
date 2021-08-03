import React from 'react';

import Task from './Task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            ListMode: this.props.ListMode
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleNew = this.handleNew.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
        this.addList = this.addList.bind(this);
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
            ListMode: "Input"
        });
    }
    handleNew() {
        this.setState({
            ListMode: "New"
        });
    }
    handleEdit() {
        this.setState({
            ListMode: "Edit"
        });
    }
    handleCloseEdit() {
        const updata = {id: this.state.id, cluster_name: this.state.text};
        this.props.onUpList(updata);
        this.setState({
            ListMode: "Show"
        });
    }
    addList() {
        this.props.onAddList(this.state.text);
        this.setState({
            text: '',
            ListMode: "New"
        });
    }
    render() {
        let head = '';
        let bottom = '';
        switch(this.state.ListMode) {
            case 'New':
                head = <span onClick={this.handleInput} className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                bottom = '';
                break;
            case 'Input':
                head = 
                <div className="p-todoList__head">
                    <input type="text" className="p-todoList__input" placeholder="リスト名" onChange={this.handleChange} value={this.state.text} />
                    <span className="p-todoList__name"></span>
                </div>;
                bottom = 
                <div className="p-todoList__bottom">
                    <button onClick={this.addList} className="p-todoList__btn c-component__item">リスト追加</button>
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
                bottom = '';
                break;
            case 'Edit':
                head = 
                <div className="p-todoList__head">
                    <div className="p-todoList__name">
                        <input type="text" className="p-todoList__input" placeholder="リスト名" value={this.state.text} onChange={this.handleChange} />
                        <button onClick={this.handleCloseEdit} className="p-todoList__btn"><i className="fas fa-arrow-circle-up"></i></button>
                    </div>
                    <p>{this.props.word['ExpTime']}：5時間</p>
                    <p>{this.props.word['SpeTime']}：10時間10分</p>
                    <p>{this.props.word['TimeLug']}：+5時間10分</p>
                </div>;
                bottom = '';
                break;
            default:
                console.log('ListMOde:default');
        }
        return (
            <li className="p-todoList__item">
                {head}
                {bottom}
                <Task />
            </li>
        );
    }
}