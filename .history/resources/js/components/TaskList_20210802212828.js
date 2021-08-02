import React from 'react';

import Task from './Task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListMode: 'New'
        }
    }
    render() {
        let head = '';
        let bottom = '';
        switch(this.state.ListMode) {
            case 'New':
                head = <span className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                bottom = '';
                break;
            case 'Input':
                head = 
                <div className="p-todoList__head">
                    <input type="text" className="p-todoList__input" placeholder="リスト名" />
                    <span className="p-todoList__name"></span>
                </div>;
                bottom = 
                <div className="p-todoList__bottom">
                    <button className="p-todoList__btn">リスト追加</button>
                    <i className="far fa-times-circle p-todoList__icon"></i>
                </div>;
                break;
            case 'Show':
                head = 
                <div className="p-todoList__head">
                    <span className="p-todoList__name">リスト名</span>
                    <p>Expected Time：5時間</p>
                    <p>Spended Time：10時間10分</p>
                    <p>Time Lug：+5時間10分</p>
                </div>;
                bottom = '';
                break;
            case 'Edit':
                head = 
                <div className="p-todoList__head">
                    <input type="text" className="p-todoList__input" placeholder="リスト名" />
                    <span className="p-todoList__name">リスト名</span>
                    <p>Expected Time：5時間</p>
                    <p>Spended Time：10時間10分</p>
                    <p>Time Lug：+5時間10分</p>
                </div>;
                bottom = '';
                break;
            default:
                console.log('default');
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