import React from "react";

export default function Synonyms(props) {
  console.log(props);
  return (
    <div className="synonyms">
      {props.synonyms.map(function (synonyms, index) {
        return (
          <div className="links">
            <div key={index}>{synonyms.synonyms}</div>
          </div>
        );
      })}
    </div>
  );
}
