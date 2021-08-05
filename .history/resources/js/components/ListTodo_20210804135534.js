import React from 'react';

import TaskList from './TaskList';

export default class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.callBackAddList = this.callBackAddList.bind(this);
        this.callBackUpList = this.callBackUpList.bind(this);
        this.callBackRemoveList = this.callBackRemoveList.bind(this);
        this.callBackAddTodo = this.callBackAddTodo.bind(this);
    }
    callBackAddList(text) {
        this.props.onAddList(text);
    }
    callBackUpList(updata) {
        this.props.onUpList(updata);
    }
    callBackRemoveList(id) {
        this.props.onRemoveList(id);
    }
    callBackAddTodo(todoData) {
        this.props.onAddTodo(todoData);
    }
    render() {
        let lists = [];
        let todos = [];
        for(let i in this.props.clusters) {
            // クラスターID（リストの番号）毎にTODOを分けた変数を作る
            for(let k in this.props.todos) {
                if(this.props.clusters[i].id === this.props.todos[k].cluster_id){
                    todos.push(this.props.todos[k]);
                }
            }
            lists.push(<TaskList    key={this.props.clusters[i].id}
                                    id={this.props.clusters[i].id}
                                    text={this.props.clusters[i].cluster_name}
                                    listMode={'Show'}
                                    word={this.props.word}
                                    onUpList={this.callBackUpList}
                                    onRemoveList={this.callBackRemoveList}
                                    todos={todos}
                                    onAddTodo={this.callBackAddTodo}
                                     />);
        }
        return (
            <ul className="p-todoList__list">
                {lists}
                <TaskList key={'n'} id={'n'} listMode="New" text={''} onAddList={this.callBackAddList} />
            </ul>
        );
    }
}