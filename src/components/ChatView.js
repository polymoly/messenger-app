import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "./Context";

import MessegeInput from "./MessegeInput";
import MessegeView from "./MessegeView";
import {
  ChatViewWrapper,
  ReplyWrapper,
  ReplyMessege,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
export default function ChatView({ id, gender, onClick }) {
  const [chat, setChat] = useState("");
  const [info, setInfo] = useState([]);
  const [record, setRecord] = useState(true);
  const [menu, setMenu] = useState(false);
  const [reply, setReply] = useState(false);
  const [replyMessege, setReplyMessege] = useState("");
  const [isVoiceSupport,setIsVoiceSupport] = useState(true);

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
  const handleListening = (record ) => {
    setRecord(record);
  };
  const handleMenuOpen = (value) => {
    console.log(value);
    setMenu(value);
  };

  const handleReply = (messege) => {
    setReply(true);
    setReplyMessege(messege);
  };
  const closeReply = () => {
    setReply(false);
  };
  return (
    <ChatViewWrapper menu={menu} darkmode={darkmode}>
      {info.length !== 0 && (
        <MessegeView
          reply={reply}
          title={info[1]}
          chats={info[0]}
          record={record}
          chat={chat}
          onClick={onClick}
          isOpen={handleMenuOpen}
          gender={gender}
          handleReply={handleReply}
          isVoiceSupport={isVoiceSupport}
        
        />
      )}
      {info.length !== 0 && <ReplyWrapper reply={reply} darkmode={darkmode}>
        <ReplyMessege darkmode={darkmode}>
          <span>{info[1]}</span>
          <span>
            {replyMessege.length > 180
              ? `${replyMessege.substring(0, 180)}...`
              : replyMessege}
          </span>
        </ReplyMessege>
        <fa.FaTimes onClick={closeReply} />
      </ReplyWrapper>}
      {info.length !== 0 && (
        <MessegeInput
          id={id}
          onClick={handleChat}
          handleListening={handleListening}
          setIsVoiceSupport={setIsVoiceSupport}
        />
      )}
    </ChatViewWrapper>
  );
}
