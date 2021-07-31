import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="">
                <div id="l-modal">
                    <div className="c-modal show">
                        <div className="c-modal__head">
                            <i class="far fa-times-circle"></i>
                        </div>
                        <form class="c-modal__form" action="" method="post">
                            
                            <div class="c-modal__bottom">
                                <p class="c-form__error">入力必須です</p>
                                <button class="c-modal__submit">ボードを作成</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="p-boardList">
                    <div class="p-boardList__head">
                        <h2 class="p-boardList__tit">ボードリスト</h2>
                        <button class="p-boardList__btn--pc">新しくボードを作成</button>
                        <button class="p-boardList__btn--sp"><i class="fas fa-plus"></i></button>
                    </div>
                    <ul class="p-boardList__list">
                        <li class="p-boardList__item">
                            <span class="p-boardList__name">ボード名ボード名</span>
                            <div class="p-boardList__left">
                                <span class="p-boardList__date">最終更新日：2021/07/16</span>
                                <i class="fas fa-ellipsis-v p-boardList__icon"></i>
                                <div id="l-itemMenu">
                                    <ul class="p-boardList__modal c-itemMenu show">
                                        <li class="c-itemMenu__item"><a><i class="fas fa-pencil-alt c-itemMenu__icon"></i>ボード名を変更</a></li>
                                        <li class="c-itemMenu__item"><a><i class="fas fa-trash-alt c-itemMenu__icon"></i>削除</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="p-boardList__item">
                            <span class="p-boardList__name">ボード名ボード名</span>
                            <div class="p-boardList__left">
                                <span class="p-boardList__date">最終更新日：2021/07/16</span>
                                <i class="fas fa-ellipsis-v p-boardList__icon"></i>
                            </div>
                        </li>
                        <li class="p-boardList__item">
                            <span class="p-boardList__name">ボード名ボード名</span>
                            <div class="p-boardList__left">
                                <span class="p-boardList__date">最終更新日：2021/07/16</span>
                                <i class="fas fa-ellipsis-v p-boardList__icon"></i>
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
