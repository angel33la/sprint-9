import React, { useEffect, useState } from "react";

function useSlider(name) {
  const [value, setVal] = useState(0);
  const onChange = (event) => {
    console.log(event);
    setVal(+event.target.value);
  };

  return { value, onChange, name, type: "range", min: "0", max: "255" };
}

function BigBox() {
  const redSlider = useSlider("red");
  const greenSlider = useSlider("green");
  const blueSlider = useSlider("blue");

  const [bgColor, setBGColor] = useState("#000000");

  const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  };

  const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  };

  useEffect(() => {
    const newBgColor = rgbToHex(
      redSlider.value,
      greenSlider.value,
      blueSlider.value
    );

    setBGColor(newBgColor);
  });

  return (
    <div
      style={{
        width: 500,
        height: 700,
        backgroundColor: bgColor,
        color: "white",
      }}
    >
      <label>Red: {redSlider.value}</label>
      <input {...redSlider}></input>
      <br />
      <label>Green: {greenSlider.value}</label>
      <input {...greenSlider}></input>
      <br />
      <label>Blue: {blueSlider.value}</label>
      <input {...blueSlider}></input>

      <p>Current colour: {bgColor}</p>
    </div>
  );
}

export default BigBox;
