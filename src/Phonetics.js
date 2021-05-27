import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetics(props) {
  let audioUrl = props.phonetic.audio;
  return (
    <div className="phonetics row">
      <div className="phonetics-text col-sm">{props.phonetic.text}</div>
      <div className="phonetics-audio col-sm">
        <ReactAudioPlayer src={audioUrl} controls />
      </div>
    </div>
  );
}
