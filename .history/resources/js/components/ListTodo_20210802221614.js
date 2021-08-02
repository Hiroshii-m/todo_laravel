import React from 'react';

import TaskList from './TaskList';

export default class ListTodo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let lists = [];
        // もしも、データがない場合
        if(lists.indexOf() === -1) {
            lists.push(<TaskList    key={'a'}
                                    id={'a'}
                                    ListMode="New" />);
        }else{
            for(let i in this.props.clusters) {
                lists.push(<TaskList    key={this.props.clusters[i].id}
                                        id={this.props.clusters[i].id} />);
            }
        }
        return (
            <ul className="p-todoList__list">
                {lists}
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