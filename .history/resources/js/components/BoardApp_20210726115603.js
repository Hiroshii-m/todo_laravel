import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddBoard from './AddBoard';
import BoardHead from './BoardHead';
import BoardList from './BordList';

export default class BoardApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addBoardShow: false
        }
        this.handleAddBoardShow = this.handleAddBoardShow.bind(this);
    }
    handleAddBoardShow() {
        this.state.addBoardShow = true;
    }
    render() {
        return (
            <div>
                <AddBoard isShow={this.state.addBoardShow} onAddBoardShow={this.handleAddBoardShow} />
                <div className="p-boardList">
                    <BoardHead />
                    <BoardList />
                </div>
            </div>
        );
    }
}

if (document.getElementById('board-app')) {
    ReactDOM.render(<BoardApp />, document.getElementById('board-app'));
}
