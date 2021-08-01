import React from 'react';

export default class ListHead extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h2 className="p-todoList__tit">
                <span>サンプルボード</span>
                {/* <input type="text" /> */}
            </h2>
        );
    }
}