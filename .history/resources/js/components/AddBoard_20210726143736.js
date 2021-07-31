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
    componentWillReceiveProps(nextProps) {
        if(this.props.isShow !== nextProps.isShow) {
            this.setState({
                isShow: nextProps.isShow
            });
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
        e.preventDefault();
    }
    render() {
        const classNameShow = classNames({
            'active': this.state.isShow
        });
        return (
            <div id="l-modal" className={classNameShow}>
                <div className="c-modal show">
                    <div className="c-modal__head">
                        <i onClick={this.handleClose} className="far fa-times-circle"></i>
                    </div>
                    <form className="c-modal__form" action="" method="post" onSubmit={this.handleSubmit}>
                        <div className="">
                            <input className="c-modal__input" type="text" value={this.state.val} onChange={this.handleChange} placeholder="ボード名" />
                        </div>
                        <div className="c-modal__bottom">
                            <p className="c-form__error">入力必須です</p>
                            <button className="c-modal__submit">ボードを作成</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}