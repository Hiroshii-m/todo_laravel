import React from 'react';

export default class ListHead extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text,
            editMode: false,
            errFlg: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleShowEdit = this.handleShowEdit.bind(this);
        this.handleCloseEdit = this.handleCloseEdit.bind(this);
    }
    // 親コンポーネントでのデータが変更した時、子コンポーネントも更新する
    UNSAFE_componentWillReceiveProps(nextProps) {
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
            // 親コンポーネントへ渡す
            this.props.onChangeBoard(this.state.text);
            this.setState({
                editMode: false
            });
        }
    }
    render() {
        const text = (this.state.editMode) ?
        <div className="u-flex">
            <input className="p-todoList__input" onChange={this.handleChange} type="text" value={this.state.text} />
            <button onClick={this.handleCloseEdit} className="p-todoList__btn u-bgColor--primary">
                <i className="fas fa-arrow-circle-up"></i>
            </button>
        </div>:
        <div onClick={this.handleShowEdit}><span className="u-margin--0-m">{this.state.text}</span></div>;

        return (
            <h2 className="p-todoList__tit">
                { text }
            </h2>
        );
    }
}