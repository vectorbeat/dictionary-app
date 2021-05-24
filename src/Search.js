import React, { useState } from "react";

export default function Search() {
  let [keyword, setKeyword] = useState("");
  function Search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="SearchForm">
      <form onSubmit={Search}>
        <div className="row">
          <input
            className="form-control form-control-lg search-field col"
            type="search"
            placeholder="look up a word..."
            aria-label=".form-control-lg example"
            autoFocus={true}
            onChange={handleKeywordChange}
          />
          <button type="submit" className="btn btn-primary search-btn col-sm-2">
            SEARCH
          </button>
        </div>
      </form>
    </div>
  );
}
