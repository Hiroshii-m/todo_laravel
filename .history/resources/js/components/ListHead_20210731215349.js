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
        <input type="text" />:
        <span>サンプルボード</span>;

        return (
            <h2 className="p-todoList__tit">
                { text }
            </h2>
        );
    }
}