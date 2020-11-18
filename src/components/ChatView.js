import React, { useEffect, useReducer, useState } from "react";

import MessegeInput from "./MessegeInput";
import MessegeView from "./MessegeView";
import { ChatViewWrapper } from "./StyledComponents";

export default function ChatView({ id }) {
  const [chat, setChat] = useState();
  const [info, setInfo] = useState([]);
  const newChat = {
    id: 4,
    messege: chat,
    isOpponent: true,
    messegeTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  };
  useEffect(() => {
    fetch("http://localhost:3001/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ chat: newChat, id: id }),
    });
  }, [chat]);

  useEffect(() => {
    if (id) {
      console.log(id);
      fetch("http://localhost:3001/getInfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((res) => res.json())
        .then((res) => {
          setInfo([res.chats, res.name, res.messegeTime, res.id]);
        });
    }
  }, [id]);
  // const chosenFriend = Friends.find((friend) => friend.id === id);

  const handleChat = (val) => {
    setChat(val);
  };
  return (
    <ChatViewWrapper>
      {info.length !== 0 && <MessegeView title={info[1]} chats={info[0]} />}
      {info.length !== 0 && <MessegeInput id={id} onClick={handleChat} />}
    </ChatViewWrapper>
  );
}
