import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <>
        <CounterDisplay num={this.state.count} />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

class CounterDisplay extends Component {
  render() {
    return (
      <>
        <p>Count: {this.props.num}</p>
      </>
    );
  }
}

export default Counter;
