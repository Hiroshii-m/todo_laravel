import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="">
                <div id="l-modal">
                    <div className="c-modal show">
                        <div className="c-modal__head">
                            <i className="far fa-times-circle"></i>
                        </div>
                        <form className="c-modal__form" action="" method="post">
                            <div className="">
                                <input className="c-modal__input" type="text" placeholder="ボード名" />
                            </div>
                            <div className="c-modal__bottom">
                                <p className="c-form__error">入力必須です</p>
                                <button className="c-modal__submit">ボードを作成</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="p-boardList">
                    <div className="p-boardList__head">
                        <h2 className="p-boardList__tit">ボードリスト</h2>
                        <button className="p-boardList__btn--pc">新しくボードを作成</button>
                        <button className="p-boardList__btn--sp"><i className="fas fa-plus"></i></button>
                    </div>
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

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
