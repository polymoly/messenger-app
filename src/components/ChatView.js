import React, { useReducer, useState } from "react";

import MessegeInput from "./MessegeInput";
import MessegeView from "./MessegeView";
import { ChatViewWrapper } from "./StyledComponents";

export default function ChatView({ id }) {
  const Friends = [
    {
      id: "1",
      name: "george colony",
      avatar: undefined,
      chats: [],
    },
    {
      id: "2",
      name: "Brad pitt",
      avatar: undefined,
      chats: [],
    },
    {
      id: "3",
      name: "Gary oldman",
      avatar: undefined,
      chats: [],
    },
    {
      id: "4",
      name: "Robert deniro",
      avatar: undefined,
      chats: [],
    },
    {
      id: "5",
      name: "Leo dicaprio",
      avatar: undefined,
      chats: [],
    },
  ];
 
  const chosenFriend = Friends.find((friend) => friend.id === id);
  
  const [ chats , setChats] = useState(chosenFriend ? chosenFriend.chats : []);


  const handleChat = (val) => {
    const currChats = [...chats];
    const newChat = {
      id: chats.length + 1,
      message: val,
      isOpponent: false,
    };
    currChats.push(newChat);
    setChats(currChats);
    console.log(currChats);
  };
  return (
    <ChatViewWrapper>
      {chosenFriend && <MessegeView title={Friends.name} chats={chats} />}
      {chosenFriend && (
        <MessegeInput
          id={id}
          chosenFriend={chosenFriend}
          onClick={handleChat}
        />
      )}
    </ChatViewWrapper>
  );
}
