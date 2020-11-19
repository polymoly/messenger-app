import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChatInput, MessegeInputWrapper } from "./StyledComponents";
import ReactDOM from "react-dom";

import {
  MdSend,
  MdMic,
  MdSentimentSatisfied,
  MdAttachFile,
  MdMicOff,
} from "react-icons/md";
import { DataContext } from "./Context";
export default function MessegeInput({ onClick, handleListening }) {

  const [val, setVal] = useState("");
  const [Record, setRecord] = useState(false);
  const inputRef = useRef();
  const optimize = useCallback(() => {
    setVal("");
    onClick(val);
  }, [onClick, val]);
  // function array_move(arr, user_index) {
  //   arr.splice(0, 0, arr.splice(user_index, 1)[0]);
  //   return arr;
  // }
  useEffect(() => {
    if (val.length > 1) {
      setVal(val.replace(/^\w/, (c) => c.toUpperCase()));
    }
    window.addEventListener("keypress", (e) => {
      if (
        e.key === "Enter" &&
        document.activeElement === ReactDOM.findDOMNode(inputRef.current) &&
        val
      ) {
        optimize();
      
      }
    });
    return window.removeEventListener("keypress", optimize);
  }, [optimize, val]);

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
    }
  };
  const resultOfSpeech = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    if(transcript.length !== 0){
      setRecord(false);
    }
    setVal(transcript);
    
  };

  useEffect(() => {
    recognition.addEventListener("result", resultOfSpeech);
  });
  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSendMessage = () => {
    if (val) {
      optimize();
    }

  };

  return (
    <MessegeInputWrapper value={val}>
      <MdSentimentSatisfied />
      <MdAttachFile />
      <ChatInput
        ref={inputRef}
        value={val}
        onChange={handleChange}
        placeholder="Type a message.."
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
    </MessegeInputWrapper>
  );
}
