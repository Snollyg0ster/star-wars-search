import React, { useEffect, useState } from "react";
import "./App.css";
import { Complete } from "./input";

const dateTypes = [
  "films",
  "people",
  "planets",
  "species",
  "starships",
  "vehicles",
];

let arr = [];

export function ApiCall() {
  let [inputText, setInputText] = useState("");
  //let [arr, setArr] = useState([]);
  useEffect(
    () => {
      arr = [];
      if (inputText.length > 2) {
        for (let i = 0; i < 6; i++) {
          let type = dateTypes[i];
          let url = "https://swapi.dev/api/" + type + "/?search=" + inputText;
          async function fetchDate() {
            let res = await fetch(url);
            let data = await res.json();
            let object = { type: type };
            data.results.map((item) => Object.assign(item, object));
            if (data.results.length !== 0) {
              data.results.map((item) => arr.push(item));
              // setArr(ar);
            }
          }
          fetchDate();
        }
        console.log(inputText);
      }
    } /*, inputText*/
  );

  function updateState() {
    console.log(arr);
  }

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
