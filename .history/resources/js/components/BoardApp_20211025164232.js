import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AddBoard from './AddBoard';
import BoardHead from './BoardHead';

export default class BoardApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addBoardShow: false,
        }
        this.handleAddBoardShow = this.handleAddBoardShow.bind(this);
        this.handleAddBoardClose = this.handleAddBoardClose.bind(this);
    }
    handleAddBoardShow() {
        this.setState({
            addBoardShow: true
        });
    }
    handleAddBoardClose() {
        this.setState({
            addBoardShow: false
        });
    }
    render() {
        return (
            <div>
                <AddBoard isShow={this.state.addBoardShow} onAddBoardClose={this.handleAddBoardClose} />
                <div className="p-boardHead c-container">
                    <BoardHead onAddBoardShow={this.handleAddBoardShow} />
                </div>
            </div>
        );
    }
}

if (document.getElementById('board-app')) {
    ReactDOM.render(<BoardApp />, document.getElementById('board-app'));
}
