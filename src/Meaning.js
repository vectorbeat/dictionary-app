import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div class="card">
        <div class="card-header">{props.meaning.partOfSpeech}</div>
        <div class="card-body">
          <h5 class="card-title definition">
            {props.meaning.definitions[0].definition}
          </h5>
          <p class="card-text example">
            {props.meaning.definitions[0].example}
          </p>
          <a href="#" class="btn btn-primary">
            {props.meaning.definitions[0].synonyms}
          </a>
        </div>
      </div>
    </div>
  );
}
