import React from "react";
import {
  Avatar,
  ChatLabel,
  ChatTitle,
  ChatWrapper,
  LastMessege,
  MessegeTime,
} from "./StyledComponents";

export default function Chat({ title, lastMessege, onClick, time }) {
  return (
    <ChatWrapper onClick={onClick}>
      <Avatar />
      <ChatLabel>
        <ChatTitle>{title}</ChatTitle>
        <LastMessege>{lastMessege}</LastMessege>
      </ChatLabel>
      <MessegeTime>{time}</MessegeTime>
    </ChatWrapper>
  );
}
