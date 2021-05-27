import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="photos">
        <div className="card container-fluid">
          <div className="row img-row">
            {props.photos.map(function (photos, index) {
              return (
                <div className="col-4" key={index}>
                  <a
                    href={photos.src.original}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={photos.src.landscape}
                      className="img-fluid thumbnails"
                      alt="thumbnail"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
