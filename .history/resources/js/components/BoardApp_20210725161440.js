import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddBoard from './AddBoard';
import BoardHead from './headBoard';

export default class BoardApp extends Component {
    render() {
        return (
            <div>
                <AddBoard />
                <div className="p-boardList">
                    <BoardHead />
                    <ul className="p-boardList__list">
                        <li className="p-boardList__item">
                            <span className="p-boardList__name">ボード名ボード名</span>
                            <div className="p-boardList__left">
                                <span className="p-boardList__date">最終更新日：2021/07/16</span>
                                <i className="fas fa-ellipsis-v p-boardList__icon"></i>
                                <div id="l-itemMenu">
                                    <ul className="p-boardList__modal c-itemMenu show">
                                        <li className="c-itemMenu__item"><a><i className="fas fa-pencil-alt c-itemMenu__icon"></i>ボード名を変更</a></li>
                                        <li className="c-itemMenu__item"><a><i className="fas fa-trash-alt c-itemMenu__icon"></i>削除</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="p-boardList__item">
                            <span className="p-boardList__name">ボード名ボード名</span>
                            <div className="p-boardList__left">
                                <span className="p-boardList__date">最終更新日：2021/07/16</span>
                                <i className="fas fa-ellipsis-v p-boardList__icon"></i>
                            </div>
                        </li>
                        <li className="p-boardList__item">
                            <span className="p-boardList__name">ボード名ボード名</span>
                            <div className="p-boardList__left">
                                <span className="p-boardList__date">最終更新日：2021/07/16</span>
                                <i className="fas fa-ellipsis-v p-boardList__icon"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

if (document.getElementById('board-app')) {
    ReactDOM.render(<BoardApp />, document.getElementById('board-app'));
}
