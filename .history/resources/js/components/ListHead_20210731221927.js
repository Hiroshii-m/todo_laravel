import React from 'react';

export default class ListHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boardName: '',
            editMode: false
        }
        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
    }
    handleShowEdit() {
        this.setState({
            editMode: true
        });
    }
    handleCloseEdit() {
        this.setState({
            editMode: false
        });
    }
    render() {
        const text = (this.state.editMode) ?
        <div className="u-flex"><input type="text" /><button onClick={this.handleCloseEdit} className="p-todoList__btn"><i className="fas fa-arrow-circle-up"></i></button></div>:
        <span onClick={this.handleShowEdit}>サンプルボード</span>;

        return (
            <h2 className="p-todoList__tit">
                { text }
            </h2>
        );
    }
}