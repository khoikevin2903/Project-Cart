import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../components/Message';


class MessageContainer extends Component {
    render() {
        return (
            <div>
                <Message message={this.props.message}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.message
    };
}

const mapDispatchToProps = (dispact, props) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);