import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <Search defaultKeyword="sunset" />

        <div className="footer">
          <a
            href="https://github.com/vectorbeat/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            View on git hub
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
