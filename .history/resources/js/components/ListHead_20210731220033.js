import React from 'react';

export default class ListHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardName: '',
            editMode: true
        }
    }
    render() {
        const text = (this.state.editMOde) ?
        <div><input type="text" /><button>確定</button></div>:
        <span>サンプルボード</span>;

        return (
            <h2 className="p-todoList__tit">
                { text }
            </h2>
        );
    }
}