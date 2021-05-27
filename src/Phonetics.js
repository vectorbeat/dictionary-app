import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  console.log(props.phonetic);
  let audioUrl = props.phonetic.audio;
  return (
    <div className="phonetics row">
      <div className="phonetics-text col-sm-6">{props.phonetic.text}</div>
      <div className="phonetics-audio col-sm-6">
        <ReactAudioPlayer src={audioUrl} controls />
      </div>
    </div>
  );
}
