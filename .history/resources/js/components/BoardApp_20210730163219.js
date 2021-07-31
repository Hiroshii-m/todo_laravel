import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import AddBoard from './AddBoard';
import BoardHead from './BoardHead';
import BoardList from './BordList';

export default class BoardApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addBoardShow: false,
            data: []
        }
        this.handleAddBoardShow = this.handleAddBoardShow.bind(this);
        this.handleAddBoardClose = this.handleAddBoardClose.bind(this);
    }
    componentDidMount() {
        axios.get('getboard')
            .then(res => {
                const boards = res.data;
                this.setState({data: boards});
            })
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
                <div className="p-boardList">
                    <BoardHead onAddBoardShow={this.handleAddBoardShow} />
                    <BoardList />
                </div>
            </div>
        );
    }
}

if (document.getElementById('board-app')) {
    ReactDOM.render(<BoardApp />, document.getElementById('board-app'));
}
