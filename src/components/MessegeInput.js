import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { ChatInput, MessegeInputWrapper } from "./StyledComponents";
import ReactDOM from "react-dom";
import * as fa from "react-icons/fa";
import {
  MdSend,
  MdMic,
  MdSentimentSatisfied,
  MdAttachFile,
} from "react-icons/md";

export default function MessegeInput({ chosenFriend, onClick }) {
  const [val, setVal] = useState("");

  const inputRef = useRef();

  const optimize = useCallback(() => {
    setVal("");
    onClick(val);
  }, [onClick, val]);

  useEffect(() => {
    if (val.length > 1) {
      setVal(val.replace(/^\w/, (c) => c.toUpperCase()));
    }
    window.addEventListener("keypress", (e) => {
      if (
        e.key === "Enter" &&
        document.activeElement === ReactDOM.findDOMNode(inputRef.current)
      ) {
        optimize();
      }
    });
    return window.removeEventListener("keypress", optimize);
  }, [optimize, val]);

  const handleChange = (e) => {
    setVal(e.target.value);
  };
  const handleSendMessage = () => {
    optimize()
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
      {!val ? <MdMic /> : <MdSend onClick={handleSendMessage} />}
    </MessegeInputWrapper>
  );
}
