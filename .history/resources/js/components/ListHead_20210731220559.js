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
        const text = (this.state.editMode) ?
        <div className="u-flex"><input type="text" /><button className="p-todoList__btn">確定</button></div>:
        <span>サンプルボード</span>;

        return (
            <h2 className="p-todoList__tit">
                { text }
            </h2>
        );
    }
}