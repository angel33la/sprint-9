import React, { Component } from "react";

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      submittedValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submittedValue: this.state.inputValue });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Submit</button>
          Submitted Value: {this.state.submittedValue}
        </form>
      </div>
    );
  }
}

export default UserForm;
