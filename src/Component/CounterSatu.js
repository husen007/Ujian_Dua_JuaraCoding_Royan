import React, { Component } from 'react';

class CounterSatu extends Component {
    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState({
            counter: this.state.counter + 2
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.props.text} {this.state.counter}
                </button>
            </div>
        );
    }
}

export default CounterSatu;