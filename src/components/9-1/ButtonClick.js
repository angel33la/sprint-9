import React from "react";

export default class ButtonClick extends React.Component {
  constructor() {
    super();

    this.state = {
      buttonClicked: false,
      div1Message: "Hover over me!",
      div2Hovered: false,
    };
  }

  handleClick = (event) => {
    console.log(event);
    this.setState({ buttonClicked: true });
  };

  handleMouseEnter = (event) => {
    this.setState({ div1Message: "Hey, we're hovering!" });
  };

  handleMouseLeave = (event) => {
    this.setState({ div1Message: "Hey, don't leave me!" });
    // this.state.div1Message = "Hey, don't leave me!";
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me!</button>
        {this.state.buttonClicked && <p>The button was clicked!</p>}

        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{ border: "1px solid black", margin: "10px" }}
        >
          {this.state.div1Message}
        </div>

        <div
          style={{ border: "1px solid black", margin: "10px" }}
          className={this.state.div2Hovered ? "red-box" : "blue-box"}
          onMouseEnter={() => {
            this.setState({ div2Hovered: true });
          }}
          onMouseLeave={() => {
            this.setState({ div2Hovered: false });
          }}
        >
          Hover over me too!
        </div>
      </div>
    );
  }
}
