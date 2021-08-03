import classNames from 'classnames';
import React from 'react';

export default class AddBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: this.props.isShow,
            val: '',
            errMsg: '',
            errFlg: false
        }
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        if(this.props.isShow !== nextProps.isShow) {
            this.setState({
                isShow: nextProps.isShow
            });
        }
    }
    errorCheck(val) {
        this.setState({
            errFlg: false,
            errMsg: ''
        });
        if(!val) {
            this.setState({
                errFlg: true,
                errMsg: '入力必須です'
            });
            return true;
        }
    }
    handleChange(e) {
        this.setState({
            val: e.target.value
        });
    }
    handleClose() {
        return this.props.onAddBoardClose();
    }
    handleSubmit(e) {
        const err = this.errorCheck(this.state.val);
        if(err === true) {
            e.preventDefault();
        }
    }
    render() {
        const classNameShow = classNames({
            'active': this.state.isShow
        });
        const errMsg = this.state.errMsg;
        const csrf_token = document.head.querySelector('meta[name="csrf-token"]').content;
        return (
            <div id="l-modal" className={classNameShow}>
                <div className="c-modal show">
                    <div className="c-modal__head">
                        <span className="u-color--accent">新たにボードを作成</span>
                        <i onClick={this.handleClose} className="far fa-times-circle"></i>
                    </div>
                    <form className="c-modal__form" method="post" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="">
                            <input name="board_name" className="c-modal__input" type="text" value={this.state.val} onChange={this.handleChange} placeholder="ボード名" />
                        </div>
                        <div className="c-modal__bottom">
                            <p className="c-form__error">{errMsg}</p>
                            <button className="c-modal__submit">送信</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}