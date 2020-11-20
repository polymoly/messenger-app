import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";

import MessegeInput from "./MessegeInput";
import MessegeView from "./MessegeView";
import { ChatViewWrapper } from "./StyledComponents";

export default function ChatView({ id, gender, onClick }) {
  const [chat, setChat] = useState("");
  const [info, setInfo] = useState([]);
  const [record, setRecord] = useState(true);
  const [menu, setMenu] = useState(false);
  const { darkmode } = useContext(DataContext);
  const newChat = {
    id: "4",
    messege: chat,
    isOpponent: false,
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
  const handleListening = (record) => {
    setRecord(record);
  };
  const handleMenuOpen = (value) => {
    console.log(value);
    setMenu(value);
  };
  return (
    <ChatViewWrapper menu={menu} darkmode={darkmode}>
      {info.length !== 0 && (
        <MessegeView
          title={info[1]}
          chats={info[0]}
          record={record}
          chat={chat}
          onClick={onClick}
          isOpen={handleMenuOpen}
          gender={gender}
        />
      )}
      {info.length !== 0 && (
        <MessegeInput
          id={id}
          onClick={handleChat}
          handleListening={handleListening}
        />
      )}
    </ChatViewWrapper>
  );
}
