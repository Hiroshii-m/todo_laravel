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
    }
    render() {
        return (
            <div>
                <AddBoard />
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
