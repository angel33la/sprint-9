import React from "react";

class EventHandling extends React.Component {
  constructor(props) {
    super(props);

    // console.log(this.props);
    this.state = {
      hover: false,
    };
  }

  onMouseEnter = () => {
    console.log("Mouse entered!");
    this.setState(
      {
        hover: true,
      },
      () => {
        console.log(this.state.hover);
      }
    );
  };

  onMouseLeave = () => {
    console.log("Mouse left!");
    this.setState(
      {
        hover: false,
      },
      () => {
        console.log(this.state.hover);
      }
    );
  };

  render() {
    return (
      <div
        className={"my-div-styles "}
        style={
          this.state.hover
            ? { backgroundColor: "red" }
            : { backgroundColor: "green" }
        }
        onMouseOver={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <h1>I love coffee!</h1>
      </div>
    );
  }
}

export default EventHandling;
