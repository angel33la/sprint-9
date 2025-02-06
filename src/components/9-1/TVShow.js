import React, { Component } from "react";

class TVShow extends Component {
  constructor(props) {
    super(props);

    this.name = props.name;
    this.userName = props.userName;
    this.leadActor = props.leadActor;
    this.favChar = props.favChar;
    this.genre = props.genre;

    this.state = {
      watched: false,
    };
  }

  watch() {
    this.setState({ watched: true });
  }

  render() {
    return (
      <div className="tv-show-box" onClick={this.watch.bind(this)}>
        <h2>
          {this.userName}'s favourite show is: {this.name}
        </h2>
        <div>
          It's a {this.genre} show about {this.favChar}!
        </div>
      </div>
    );
  }
}

export default TVShow;
