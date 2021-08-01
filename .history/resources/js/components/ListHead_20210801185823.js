import React from 'react';
import axios from 'axios';

export default class ListHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            editMode: false,
            errFlg: false,
            u_id: this.props.u_id
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.text != nextProps.text) {
            this.setState({
                text: nextProps.text
            });
        }
        if(this.props.id != nextProps.id) {
            this.setState({
                id: nextProps.id
            });
        }
        if(this.props.u_id != nextProps.u_id) {
            this.setState({
                u_id: nextProps.u_id
            });
        }
    }
    errorCheck(val) {
        if(!val) {
            this.setState({
                errFlg: true
            });
            return true;
        }else{
            this.setState({
                errFlg: false
            });
            return false;
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
    // ボード名、編集完了
    handleCloseEdit() {
        const err = this.errorCheck(this.state.text);
        if(err !== true) {
            // ボード名をDBへ送信
            axios
                .post('/api/upboard', {
                    b_id: this.state.id,
                    u_id: this.state.u_id,
                    text: this.state.text
                })
                .then( res => {
                    this.setState({
                        text: res,
                        editMode: false
                    });
                })
                .catch( err => {
                    console.log(err);
                });
        }
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