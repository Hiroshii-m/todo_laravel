import React from 'react';

export default class TaskList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ListMode: 'Input'
        }
    }
    render() {

        switch(this.state.ListMode) {
            case 'New':
                const head = '';
                const content = <span className="p-todoList__add"><i className="fas fa-plus"></i>リストを追加</span>;
                const bottom = '';
                break;
            case 'Input':
                const head = 
                <div className="p-todoList__head">
                        <input type="text" className="p-todoList__input" placeholder="リスト名" />
                        <span className="p-todoList__name"></span>
                    </div>;
                const content = '';
                const bottom = 
                <div className="p-todoList__bottom">
                    <button className="p-todoList__btn">リスト追加</button>
                    <i className="far fa-times-circle p-todoList__icon"></i>
                </div>;
                break;
        }
        return (
            {task}
        );
    }
}