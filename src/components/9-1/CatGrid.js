import React from "react";
import Loading from "./Loading";
import Cat from "./Cat";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "context/ThemeContext";

const MIN_CATS_TO_FETCH = 5;
const CAT_URL = "https://api.thecatapi.com/v1/images/search?order=RAND&limit=";
const CAT_API_KEY =
  "live_4Z4WujHfPhTgYV9CTGLgu9d3c2NX35gdREMY4L3GOm5WNpYT3SEbTZCJOEIHPSwJ";

class CatGrid extends React.Component {
  constructor() {
    super();
    this.state = {
      catArray: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    this.getMoreCats();
  }

  async getMoreCats() {
    const headers = new Headers({
      "Content-Type": "application/json",
      "x-api-key": CAT_API_KEY,
    });

    var requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(CAT_URL + MIN_CATS_TO_FETCH, requestOptions)
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          throw new Error("Failed to fetch cats");
        }
        return response.json();
      })
      .then((data) => {
        this.setState((prevState) => ({
          catArray: [...prevState.catArray, ...data],
          isLoading: false,
        }));
      })
      .catch((error) => {
        console.error("Error fetching cats:", error);
        this.setState({ isLoading: false });
      });
  }
  async fetchCats() {
    this.setState({ isLoading: true });
    if (this.state.catArray.length > 0) {
      return;
    }

    const reqOptions = {
      headers: {
        "x-api-key": CAT_API_KEY,
      },
    };

    const res = await fetch(CAT_URL + MIN_CATS_TO_FETCH, reqOptions);

    if (res.status !== 200) {
      return;
    }

    const data = await res.json();

    this.setState({
      catArray: [...this.state.catArray, ...data],
      isLoading: false,
    });
  }

  handleClick = () => {
    this.getMoreCats();
  };

  /**
   * @param {"light" | "dark"} theme
   */
  updateTheme = (theme) => {
    this.setState({ theme: theme });
  };

  render() {
    return (
      <>
        <div
          className={this.state.theme === "light" ? "bg-light" : "bg-dark"}
          style={{ height: "100vh" }}
        >
          <div className="cats-header">
            <span
              className={
                "cats-title " +
                (this.state.theme === "light" ? "title-light" : "title-dark")
              }
            >
              CATS
            </span>
            <hr />
          </div>

          <br />

          <div className="cats-header">
            {this.state.catArray?.map((element, index) => {
              return <Cat key={element.id} url={element.url} id={index} />;
            })}
            {this.state.isLoading && <Loading />}

            <hr />
            <button className="cats-button" onClick={this.handleClick}>
              MORE CATS!
            </button>
            <ThemeToggle themeUpdated={this.updateTheme} />
          </div>
        </div>
      </>
    );
  }
}

export default CatGrid;
