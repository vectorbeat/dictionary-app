import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
