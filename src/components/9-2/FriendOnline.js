import React from "react";

const { useState, useEffect } = require("react");

function FriendOnline() {
  const [online, setOnline] = useState(true);
  const [value, setValue] = useState(0);
  const [bgColor, setBGColor] = useState("#000000");

  setInterval(() => {
    setOnline(!online);
  }, 5000);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    let newColor = "#0000" + value.toString(16);
    setBGColor(newColor);
  });

  return (
    <>
      <div style={{ width: 500, height: 400, backgroundColor: bgColor }}></div>
      <input
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={handleChange}
      ></input>
      <p>Online Status: {online + ""}</p>
    </>
  );
}

export default FriendOnline;
