import React from "react";
import {
  Avatar,
  ChatLabel,
  ChatTitle,
  ChatWrapper,
  LastMessege,
  MessegeTime,
} from "./StyledComponents";

export default function Chat({ title, lastMessege, onClick, time, gender }) {
  return (
    <ChatWrapper onClick={onClick}>
      <Avatar gender={gender} />
      <ChatLabel>
        <ChatTitle>{title}</ChatTitle>
        <LastMessege>{lastMessege}</LastMessege>
      </ChatLabel>
      <MessegeTime>{time}</MessegeTime>
    </ChatWrapper>
  );
}
