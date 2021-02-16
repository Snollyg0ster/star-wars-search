import "./App.css";
import ApiCall from "./Search";

function App() {
  document.title = "Star wars search";
  return (
    <div className="App">
      <div id="titleGroup">
        <h1 id="smallTitle">search engine</h1>
        <h1 id="title">Star Wars </h1>
      </div>
      <ApiCall />
    </div>
  );
}

export default App;
