import React from "react";

class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      height: "200",
    };
  }

  render() {
    return (
      <img src={this.props.url} alt="cat-image" height={this.state.height} />
    );
  }
}

export default Cat;
