import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { FcSpeaker } from "react-icons/fc";
const Speaker = ({ speak_this }) => {
  const { speak } = useSpeechSynthesis();

  return (
    <div className="speech">
      <FcSpeaker
        style={{ cursor: "pointer", fontSize: "1.2em" }}
        onClick={() => {
          speak({ text: speak_this });
        }}
      />
    </div>
  );
};

export default Speaker;
