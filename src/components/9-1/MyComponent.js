import React from "react";

export default class NumberCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      loading: true,
    };

    this.API_URL = "https://api.sampleapis.com/coffee/hot";
  }

  componentDidMount() {
    fetch(this.API_URL)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data,
          loading: false,
        });
      });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading.....</div>;
    }

    return (
      <div>
        <h1>Fetched Data: </h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
}
