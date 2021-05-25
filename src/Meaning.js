import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="card">
        <div className="card-header">{props.meaning.partOfSpeech}</div>
        <div className="card-body">
          <h5 className="card-title definition">
            {props.meaning.definitions[0].definition}
          </h5>
          <p className="card-text example">
            {props.meaning.definitions[0].example}
          </p>
          <a href="https://www.google.com" className="btn btn-primary">
            {props.meaning.definitions[0].synonyms}
          </a>
        </div>
      </div>
    </div>
  );
}
