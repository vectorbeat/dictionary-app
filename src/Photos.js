import React from "react";

export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="photos">
        {props.photos.map(function (photos, index) {
          return <img src={photos.src.landscape} />;
        })}
      </div>
    );
  } else {
    return null;
  }
}
