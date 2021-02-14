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
  const [currentObject, setCurrentObject] = useState(null);

  function updateState() {
    console.log("Result: ", arr);
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

    const formattedData = data.results.map((item) => ({ ...item, type }));

    return formattedData;
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

  function optionOnSelect(option) {
    const arrItem = arr.find((item) => item.name === option);

    setCurrentObject(arrItem);
  }

  function resetArr() {
    setArr([]);
  }

  useEffect(() => {
    if (inputText.length > 2) {
      updateArr();
    } else {
      if (inputText.length === 0) {
        resetArr();
      }
    }
    /* eslint-disable-next-line */
  }, [inputText]);

  useEffect(() => {
    if (inputText.length === 0 && arr.length > 0) {
      resetArr();
    }
    /* eslint-disable-next-line */
  }, [arr]);

  return (
    <>
      <div id="inputGroup">
        <Complete
          onChange={(text) => setInputText(text)}
          onSelect={optionOnSelect}
          arr={arr}
        />
        <button id="searchButton" onClick={updateState}>
          search
        </button>{" "}
      </div>
      {currentObject ? (
        <div style={{ marginTop: 30, width: 280 }}>
          {Object.keys(currentObject).map((key) => {
            return (
              <p key={key} style={{ color: "white", textAlign: "left" }}>
                {key}: {currentObject[key]}
              </p>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default Search;
