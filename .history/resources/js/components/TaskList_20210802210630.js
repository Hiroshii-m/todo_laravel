import React from 'react';
import ReactDOM from 'react-dom';

import Task from './Task';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListMode: 'New'
        }
    }
    render() {
        switch(this.state.ListMode) {
            case 'New':
                let head = <span className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                let bottom = '';
                break;
            case 'Input':
                let head = 
                <div className="p-todoList__head">
                    <input type="text" className="p-todoList__input" placeholder="リスト名" />
                    <span className="p-todoList__name"></span>
                </div>;
                let bottom = 
                <div className="p-todoList__bottom">
                    <button className="p-todoList__btn">リスト追加</button>
                    <i className="far fa-times-circle p-todoList__icon"></i>
                </div>;
                break;
            case 'Show':
                let head = 
                <div className="p-todoList__head">
                    <span className="p-todoList__name">リスト名</span>
                    <p>Expected Time：5時間</p>
                    <p>Spended Time：10時間10分</p>
                    <p>Time Lug：+5時間10分</p>
                </div>;
                let bottom = '';
                break;
            case 'Edit':
                let head = 
                <div className="p-todoList__head">
                    <input type="text" className="p-todoList__input" placeholder="リスト名" />
                    <span className="p-todoList__name">リスト名</span>
                    <p>Expected Time：5時間</p>
                    <p>Spended Time：10時間10分</p>
                    <p>Time Lug：+5時間10分</p>
                </div>;
                let bottom = '';
                break;
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