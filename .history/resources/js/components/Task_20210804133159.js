import React from 'react';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            isDone: this.props.isDone,
            expTime: this.props.expTime,
            speTime: this.props.speTime,
            taskMode: this.props.taskMode
        }
        // this.addTodo = this.addTodo.bind(this);
    }
    // addTodo() {
    //     // const todoData = {id: this.state.id, c_id: this.props.cluster_id, text: this.state.text};
    //     // this.props.onAddTodo(todoData);
    // }
    render() {
        let task = '';
        switch(this.state.taskMode){
            case "New":
                task = <span onClick={this.handleInput} className="p-todoList__add"><i className="fas fa-plus"></i>TODOを追加</span>;
                break;
            case "Input":
                task = 
                <div>
                    <input type="text" className="p-todoList__input" placeholder="TODO名" />
                    <div className="p-todoList__bottom">
                        <span className="p-todoList__btn u-bgColor--primary"><i className="fas fa-plus"></i>TODOを追加</span>
                        <i className="far fa-times-circle p-todoList__icon"></i>
                    </div>
                </div>;
                break;
            case "Show":
                task = 
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
                </div>;
                break;
            case "Edit":
                task = 
                <div className="">
                    <div className="p-todoList__todo">
                        <i className="far fa-square p-todoList__icon"></i>
                        <input type="text" className="p-todoList__input u-margin--0-m" placeholder="TODO名" />
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
                </div>;
                break;
        }
        return (
            <div>
                {task}
            </div>
        );
    }
}