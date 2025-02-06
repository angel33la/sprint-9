import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AxiosMock() {
  const [text, setText] = useState("");

  useEffect(() => {
    axios
      .get("/mock")
      .then((res) => res.data)
      .then((res) => {
        setText(res.message);
      });
  });
  return <div>{text}</div>;
}
