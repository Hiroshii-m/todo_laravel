import React from 'react';

import TaskList from './TaskList';

export default class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.callBackAddList = this.callBackAddList.bind(this);
        this.callBackUpList = this.callBackUpList.bind(this);
        this.callBackRemoveList = this.callBackRemoveList.bind(this);
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
    render() {
        let lists = [];
        let todos = [];
        for(let i in this.props.clusters) {
            // クラスターID（リストの番号）毎にTODOを分けた変数を作る
            // if(this.props.clusters[i].id === this.props)
            for(let k in this.props.todos) {
                if(this.props.clusters[i].id === this.props.todos[k].cluster_id){
                    todos.push(this.props.todos[k]);
                }
            }
            lists.push(<TaskList    key={this.props.clusters[i].id}
                                    id={this.props.clusters[i].id}
                                    text={this.props.clusters[i].cluster_name}
                                    ListMode={'Show'}
                                    word={this.props.word}
                                    onUpList={this.callBackUpList}
                                    onRemoveList={this.callBackRemoveList}
                                    todos={todos} />);
        }
        return (
            <ul className="p-todoList__list">
                {lists}
                <TaskList key={'n'} id={'n'} ListMode="Input" text={''} onAddList={this.callBackAddList} />
                <li className="p-todoList__item">
                    <div className="p-todoList__head">
                        {/* <input type="text" className="p-todoList__input" placeholder="リスト名" /> */}
                        <span className="p-todoList__name">リスト名</span>
                        <p>Expected Time：5時間</p>
                        <p>Spended Time：10時間10分</p>
                        <p>Time Lug：+5時間10分</p>
                    </div>
                    <div className="p-todoList__bottom">
                        <span className="p-todoList__add"><i className="fas fa-plus"></i>TODOを追加</span>
                    </div>
                </li>
                <li className="p-todoList__item">
                    <div className="p-todoList__head">
                        {/* <input type="text" className="p-todoList__input" placeholder="リスト名" /> */}
                        <span className="p-todoList__name">リスト名</span>
                        <p>Expected Time：5時間</p>
                        <p>Spended Time：10時間10分</p>
                        <p>Time Lug：+5時間10分</p>
                    </div>
                    
                    <input type="text" className="p-todoList__input" placeholder="TODO名" />
                    <div className="p-todoList__bottom">
                        <span className="p-todoList__btn"><i className="fas fa-plus"></i>TODOを追加</span>
                        <i className="far fa-times-circle p-todoList__icon"></i>
                    </div>
                </li>
                <li className="p-todoList__item">
                    <div className="p-todoList__head">
                        {/* <input type="text" className="p-todoList__input" placeholder="リスト名" /> */}
                        <span className="p-todoList__name">リスト名</span>
                        <p>Expected Time：5時間</p>
                        <p>Spended Time：10時間10分</p>
                        <p>Time Lug：+5時間10分</p>
                    </div>
                    <div className="">
                        <div className="p-todoList__todo">
                            <i className="far fa-square p-todoList__icon"></i>
                            {/* <input type="text" className="p-todoList__input u-margin--0-m" placeholder="TODO名" /> */}
                            <span className="p-todoList__text u-margin--0-m">TODO</span>
                        </div>
                        <div className="c-acd">
                            <input className="c-acd__check" type="checkbox" />
                            <div className="c-acd__content p-todoList__acd">
                                <div className="c-acd__item">
                                    <i className="far fa-edit p-todoList__icon"></i>
                                    <p className="c-acd__text">編集</p>
                                </div>
                                <div className="c-acd__item">
                                    <i className="far fa-trash-alt p-todoList__icon"></i>
                                    <p className="c-acd__text">削除</p>
                                </div>
                                <div className="c-acd__time">
                                    <p>予想時間：<input type="time" defaultValue="00:00" /></p>
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
                    </div>
                    <div className="p-todoList__bottom">
                        <span className="p-todoList__add"><i className="fas fa-plus"></i>TODOを追加</span>
                    </div>
                </li>
            </ul>
        );
    }
}