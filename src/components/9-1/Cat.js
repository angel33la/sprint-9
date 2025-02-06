import React from "react";

class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      url: "",
      height: "200",
    };
  }

  render() {
    let { url } = this.props;

    return (
      <img alt={"IMG_" + this.props.id} src={url} height={this.state.height} />
    );
  }
}

export default Cat;
