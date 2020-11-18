import React from "react";
import {
  Avatar,
  ChatLabel,
  ChatTitle,
  ChatWrapper,
  LastMessege,
  MessegeTime,
} from "./StyledComponents";

export default function Chat({ title, lastMessage, onClick, time }) {
  return (
    <ChatWrapper onClick={onClick}>
      <Avatar />
      <ChatLabel>
        <ChatTitle>{title}</ChatTitle>
        <LastMessege>{lastMessage}</LastMessege>
      </ChatLabel>
      <MessegeTime>{time}</MessegeTime>
    </ChatWrapper>
  );
}
