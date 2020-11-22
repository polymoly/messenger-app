import React, { useContext, useEffect, useRef, useState } from "react";
import { ChatInput, MessegeInputWrapper,ReplayWrapper } from "./StyledComponents";

import {
  MdSend,
  MdMic,
  MdSentimentSatisfied,
  MdMicOff,
  MdSentimentDissatisfied,
} from "react-icons/md";
import Picker from "emoji-picker-react";
import { DataContext } from "./Context";

export default function MessegeInput({ onClick, handleListening, setIsVoiceSupport }) {
  const [val, setVal] = useState("");
  const [Record, setRecord] = useState(false);
  const inputRef = useRef();
  const [isEmoji, setIsEmoji] = useState(false);
  const {darkmode} = useContext(DataContext);


  useEffect(() => {
    if (val.length > 1) {
      setVal(val.replace(/^\w/, (c) => c.toUpperCase()));
    }
  }, [val]);
  const handleKeypress = (e) => {
    if (e.key === "Enter" && val.length !== 0) {
      setVal("");
      onClick(val);
      setIsEmoji(false);
    }
  };
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();
  recognition.continuous = true;

  const handleRecord = () => {
    handleListening(Record);
    if ("speechSynthesis" in window && SpeechRecognition) {
      if (!Record) {
        setRecord(true);
        recognition.start();
        console.log("voice search started");
      } else {
        setRecord(false);
        recognition.stop();
        console.log("voice search ended");
      }
    }else{
      setIsVoiceSupport(false)
    }
  };
  const resultOfSpeech = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    if (transcript.length !== 0) {
      setRecord(false);
    }
    setVal(transcript);
  };

  useEffect(() => {
    recognition.addEventListener("result", resultOfSpeech);
  });
  const handleChange = (e) => {
    setVal(e.target.value);
    setIsEmoji(false);
  };
  const handleSendMessage = () => {
    if (val) {
      setVal("");
      onClick(val);
      setIsEmoji(false);
    }
  };
  const onEmojiClick = (event, emojiObject) => {
    setVal(emojiObject.emoji);
  };

  return (
    <MessegeInputWrapper value={val} darkmode={darkmode}>
      {!isEmoji && (
        <MdSentimentSatisfied onClick={() => setIsEmoji(!isEmoji)} />
      )}
      {isEmoji && (
        <MdSentimentDissatisfied onClick={() => setIsEmoji(!isEmoji)} />
      )}
      
      <ChatInput
        ref={inputRef}
        value={val}
        onChange={handleChange}
        onKeyPress={handleKeypress}
        placeholder="Type a message.."
        darkmode={darkmode}
      />
      
      {!val ? (
        !Record ? (
          <MdMic onClick={handleRecord} />
        ) : (
          <MdMicOff onClick={handleRecord} />
        )
      ) : (
        <MdSend onClick={handleSendMessage} />
      )}
      {isEmoji && (
        <Picker onEmojiClick={onEmojiClick} disableAutoFocus={true} />
      )}
    </MessegeInputWrapper>
  );
}
