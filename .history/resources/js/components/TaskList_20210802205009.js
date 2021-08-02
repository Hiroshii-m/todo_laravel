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
        switch(this.state.ListMode) {
            case 'New':
                
                const bottom = '';
                break;
            case 'Input':
                
                const bottom = 
                <div className="p-todoList__bottom">
                    <button className="p-todoList__btn">リスト追加</button>
                    <i className="far fa-times-circle p-todoList__icon"></i>
                </div>;
                break;
            case 'Show':
                
                const bottom = '';
                break;
            case 'Edit':
                
                bottom = '';
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