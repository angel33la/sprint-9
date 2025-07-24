import CatGrid from "components/9-1/CatGrid";
import "./App.css";
import "./css/styles.css";
import React, { useState } from "react";

function App() {
  return (
    <>
      <div className="App-header">
        <h1>Welcome to the Cat App</h1>
        <p>Here you can find a collection of cute cat pictures!</p>
      </div>
      <CatGrid />
    </>
  );
}

export default App;
