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
        // 入力エラー削除
        this.setState({
            errFlg: false,
            errMsg: ''
        });
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
                <div className="p-boardModal show">
                    <div className="p-boardModal__head">
                        <span className="u-color--accent">新たにボードを作成</span>
                        <i onClick={this.handleClose} className="far fa-times-circle"></i>
                    </div>
                    <form className="p-boardModal__form" method="post" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="_token" value={csrf_token} />
                        <div className="">
                            <input value={this.state.val} onChange={this.handleChange} name="board_name" 
                            className="p-boardModal__input" type="text" placeholder="ボード名" />
                        </div>
                        <div className="p-boardModal__bottom">
                            <p className="u-color--error">{errMsg}</p>
                            <button className="p-boardModal__submit">作成</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}