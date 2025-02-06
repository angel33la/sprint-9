import { Component } from "react";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      message: "Dogs are cool!",
    };
  }

  updateMyState() {
    this.state.message = "Hey";
    this.state = {
      message: "YOLO",
    };
    // The above two lines will NOT trigger a re-render of the page

    this.setState({
      message: "Hey everyone!",
    });
    console.log("New message", this.state.message);
    // This WILL update state, and trigger a re-render, but asynchronous nature of the setState method will give wrong console.log value

    this.setState(
      {
        message: "We have a new message",
      },
      () => {
        console.log("New message", this.state.message);
      }
    );
    // React provides a callback function, which will be executed after the state has been updated.
    // Alternatively, use setTimeout
  }

  render() {
    return (
      <div>
        <Child message={this.state.message} />
        <button onClick={this.updateMyState.bind(this)}>Update</button>
      </div>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  sendAlert = () => {
    window.alert(this.props.message);
  };

  render() {
    return (
      <div>
        <h1>{this.props.message}</h1>

        <button onClick={this.sendAlert}>Alert</button>
      </div>
    );
  }
}

export default Parent;
