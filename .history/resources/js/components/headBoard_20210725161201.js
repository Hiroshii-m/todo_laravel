import React from 'react';

export default class HeadBoard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="p-boardList__head">
                <h2 className="p-boardList__tit">ボードリスト</h2>
                <button className="p-boardList__btn--pc">新しくボードを作成</button>
                <button className="p-boardList__btn--sp"><i className="fas fa-plus"></i></button>
            </div>
        );
    }
}