import React from 'react';

export default class BoardHead extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddBoardShow = this.handleAddBoardShow.bind(this);
    }
    handleAddBoardShow() {
        return this.props.onAddBoardShow();
    }
    render() {
        return (
            <div className="p-boardList__head">
                <h2 className="c-component__tit">ボードリスト</h2>
                <button className="p-boardList__btn--pc" onClick={this.handleAddBoardShow}>新たにボードを作成</button>
                <button className="p-boardList__btn--sp"><i className="fas fa-plus"></i></button>
            </div>
        );
    }
}