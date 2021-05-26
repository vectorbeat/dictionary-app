import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="card">
        <div className="card-header">{props.meaning.partOfSpeech}</div>
        <div className="card-body">
          {props.meaning.definitions.map(function (definition, index) {
            return (
              <div className="card-title definition">
                <div key={index}>{definition.definition}</div>
                <p className="card-text example">{definition.example}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
