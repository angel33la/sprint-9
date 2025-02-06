import axios from "axios";
import React, { useEffect, useState } from "react";

export default function MyComp() {
  let data = "Loading";

  useEffect(() => {
    const getData = async () => {
      data = await axios.get("/myData");
    };

    getData();
  });

  return <div>{data}</div>;
}
