import React from 'react';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            text: this.props.text,
            isDone: this.props.isDone
            TaskMode: 'New'
        }
    }
    render() {
        return (
            <div></div>
        );
    }
}