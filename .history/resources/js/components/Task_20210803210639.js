import React from 'react';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            TaskMode: 'New'
        }
    }
    render() {
        return (
            <div></div>
        );
    }
}