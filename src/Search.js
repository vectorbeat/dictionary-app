import React from "react";

export default function Search() {
  return (
    <div className="SearchForm">
      <form>
        <dv className="row">
          <input
            className="form-control form-control-lg search-field col"
            type="search"
            placeholder="look up a word..."
            aria-label=".form-control-lg example"
            autoFocus={true}
          />
          <button type="submit" class="btn btn-primary search-btn col-2">
            SEARCH
          </button>
        </dv>
      </form>
    </div>
  );
}
