import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

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
                    <b> LIKES: {this.props.count}</b> <br />
                    <button class="button-state" style={{ cursor: "pointer" }} onClick={this.increment}>LOCAL STATE</button>&nbsp;&nbsp;👍 <br />
                    <button class="button-state" style={{ cursor: "pointer" }} onClick={this.decrement}>LOCAL STATE</button>&nbsp;&nbsp;👎 <br />
                    <button class="button-state" style={{ cursor: "pointer" }} onClick={this.globalIncrement}>GLOBAL STATE</button>&nbsp;&nbsp;👍 <br />
                    <button class="button-state" style={{ cursor: "pointer" }} onClick={this.globalDecrement}>GLOBAL STATE</button>&nbsp;&nbsp;👎 <br />
                </div>

                <br />
                <a href="#/app2/subroute1">Angular 6 subroute 1</a>&nbsp;
                <a href="#/app2/subroute2">Angular 6 subroute 2</a>

            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

export default connect(mapStateToProps)(Counter);