import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super();

    this.state = {
      isMouseEnter: false,
    };
  }

  /* this.increment = this.increment.bind(this);
  this.decrement = this.decrement.bind(this); */

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
  constructor(props) {
    super(props);

    this.state = {
      isMouseEntered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isMouseEntered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isMouseEntered: false });
  };

  render() {
    return (
      <>
        <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
          {this.state.isMouseEntered ? "Hovering" : ""}
          <br />
          Count: {this.props.num}
        </div>
        <p>Count: {this.state.num}</p>
      </>
    );
  }
}

export default Counter;
