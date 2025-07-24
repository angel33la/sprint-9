import React from "react";
import Cat from "./Cat";

const CAT_API_KEY =
  "live_4Z4WujHfPhTgYV9CTGLgu9d3c2NX35gdREMY4L3GOm5WNpYT3SEbTZCJOEIHPSwJ";
const CAT_URL = "https://api.thecatapi.com/v1/images/search?order=RAND&limit=5";

class CatGrid extends React.Component {
  constructor() {
    super();

    this.state = {
      catArray: [],
    };
  }

  componentDidMount() {
    this.getCatImages();
  }

  getCatImages() {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": CAT_API_KEY,
    });

    var requestOptions = {
      headers: headers,
    };

    fetch(CAT_URL, requestOptions)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);

        this.setState({ catArray: data });
      });
  }

  render() {
    return (
      <>
        {this.state.catArray.map((cat) => (
          <Cat url={cat.url} key={cat.id} />
        ))}
      </>
    );
  }
}

export default CatGrid;
