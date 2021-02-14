import "./App.css";
import { ApiCall } from "./apiCall";
import { Complete } from "./input";

function App() {
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
