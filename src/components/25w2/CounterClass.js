import React from "react";
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      isMouseEnter: false,
    };

  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

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
    console.log("Constructor has been called!");
    super(props);

    this.state = {
      isMouseEntered: false,
    };
  }

  componentDidMount() {
    console.log("Component did mount!");
  }

  componentDidUpdate() {
    console.log("Component did update!");
  }

  shouldComponentUpdate() {
    let condition = Math.random() > 0.5;
    console.log("Should component update???", condition);
    return condition;
  }

  handleMouseEnter = () => {
    this.setState({ isMouseEntered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isMouseEntered: false });
  };

  render() {
    console.log("We're about to render!");
    return (
      <>
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.state.isMouseEntered ? "Hovering" : ""}
          <br />
          Count: {this.props.num}
        </div>
        <p>Count: {this.state.num}</p>
        <div
          id="my-count-div"
          className={
            this.state.isMouseEnter ? "count-div green-div" : "count-div"
          }
          onMouseEnter={() => this.setState({ isMouseEnter: true })}
          onMouseLeave={() => this.setState({ isMouseEnter: false })}
        >
          <p>Count: {this.props.num}</p>
        </div>
      </>
    );
  }
}

export default Counter;

// onMouseEnter
// onMouseLeave
// onMouseOver
