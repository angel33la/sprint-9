import "./App.css";
import "./css/styles.css";
import React, { useState } from "react";
import { tvShows } from "data/TVShowList";
import BigBox from "components/9-2/BigBox";
import MyCounter from "components/9-2/Counter";
import Form from "components/9-2/Form";
import InputForm from "components/9-2/InputForm";
import CatGrid from "components/9-1/CatGrid";

function App() {
  const tvShowList = tvShows;

  const [theme, setTheme] = useState("light");
  return (
    <>
      <CatGrid />
    </>
  );
}

export default App;
