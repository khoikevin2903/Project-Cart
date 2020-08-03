import React, { Component } from 'react';

class Message extends Component {
    render() {
        var { message } = this.props;
        return (
            <div>
                <h3 className="text-2xl">
                    <span className="badge amber darken-2">{message}</span>
                </h3>
            </div>
        );
    }
}

export default Message;