import React from "react";
import Synonyms from "./Synonyms";

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
                <Synonyms synonyms={definition.synonyms} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
