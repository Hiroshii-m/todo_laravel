import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AddBoard from './AddBoard';
import BoardHead from './BoardHead';
import BoardList from './BordList';

export default class BoardApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addBoardShow: true
        }
    }
    render() {
        return (
            <div>
                <AddBoard isShow={addBoardShow} />
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
