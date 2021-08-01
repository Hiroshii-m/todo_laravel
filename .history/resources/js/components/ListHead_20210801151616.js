import React from 'react';

export default class ListHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            editMode: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
    }
    static componentWillReceiveProps(nextProps) {
        if(this.state.text != nextProps.text) {
            this.setState({
                text: nextProps.text
            });
        }
    }
    handleChange(e) {
        this.setState({
            text: e.target.value
        });
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
        <div className="u-flex"><input onChange={this.handleChange} type="text" value={this.state.text} /><button onClick={this.handleCloseEdit} className="p-todoList__btn"><i className="fas fa-arrow-circle-up"></i></button></div>:
        <span onClick={this.handleShowEdit}>{this.state.text}</span>;

        return (
            <h2 className="p-todoList__tit">
                { text }
            </h2>
        );
    }
}