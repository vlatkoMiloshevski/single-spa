import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    globalIncrement = () => {
        this.props.globalEventDistributor.dispatch({ type: 'INCREMENT' });
    };

    globalDecrement = () => {
        this.props.globalEventDistributor.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div>
                <br />
                <div>
                    <b> EMOTICONS: {this.props.count}</b> <br />
                    <button style={{ cursor: "pointer" }} onClick={this.increment}>😊</button>&nbsp;&nbsp;👍 <br />
                    <button style={{ cursor: "pointer" }} onClick={this.decrement}>😕</button>&nbsp;&nbsp;👎 <br />
                    <button style={{ cursor: "pointer" }} onClick={this.globalIncrement}>😍</button>&nbsp;&nbsp;👍 <br />
                    <button style={{ cursor: "pointer" }} onClick={this.globalDecrement}>😏</button>&nbsp;&nbsp;👎 <br />
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);