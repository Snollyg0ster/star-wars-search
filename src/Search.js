import React, { useEffect, useState } from "react";
import "./App.css";
import Complete from "./input";

const dataTypes = [
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
];

function Search() {
  const [inputText, setInputText] = useState("");
  const [arr, setArr] = useState([]);

  function updateState() {
    console.log(arr);
  }

  async function fetchData(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    } catch (e) {
      console.error("error in fetchDate", e);
    }
  }

  async function getTypeData(url, type) {
    const data = await fetchData(url);

    data.results.map((item) => ({ ...item, type }));

    //console.warn(">>data.results", data.results);

    return data.results;
  }

  async function updateArr() {
    const newArr = [];

    for (const type of dataTypes) {
      const url = "https://swapi.dev/api/" + type + "/?search=" + inputText;

      const typeData = await getTypeData(url, type);

      if (typeData.length > 0) {
        typeData.forEach((item) => {
          newArr.push(item);

          return item;
        });
      }
    }

    setArr(newArr);
  }

  useEffect(() => {
    if (inputText.length > 2) {
      if (arr.length === 0) {
        console.warn(">>useEffect works");

        updateArr();

        console.log(inputText);
      }
    } else {
      if (inputText.length === 0 && arr.length > 0) {
        setArr([]);
      }
    }
    /* eslint-disable-next-line */
  }, [inputText, arr]);

  return (
    <div id="inputGroup">
      <Complete onChange={(text) => setInputText(text)} arr={arr} />
      <button id="searchButton" onClick={updateState}>
        search
      </button>{" "}
      */
    </div>
  );
}

export default Search;

{
  /* <input
        type="text"
        id="input"
        placeholder="Type something"
        onChange={(text) => setInputText(text.target.value)}
      />
      <button id="searchButton" onClick={updateState}>
        search
      </button> */
}
