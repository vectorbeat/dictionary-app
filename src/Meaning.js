import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition">
        {props.meaning.definitions[0].definition}
      </div>
      <div className="example">{props.meaning.definitions[0].example}</div>
      <div className="synonyms">
        SYNONYMS:{" "}
        <ul>
          <li>{props.meaning.definitions[0].synonyms}</li>
        </ul>
      </div>
    </div>
  );
}
