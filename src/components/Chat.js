import React from "react";
import {
  Avatar,
  ChatLabel,
  ChatTitle,
  ChatWrapper,
  LastMessege,
  MessegeTime,
} from "./StyledComponents";

export default function Chat({ title, lastMessage ,onClick }) {
  return (
    <ChatWrapper onClick={onClick}>
      <Avatar />
      <ChatLabel>
        <ChatTitle>{title}</ChatTitle>
        <LastMessege>{lastMessage}</LastMessege>
      </ChatLabel>
      <MessegeTime>
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </MessegeTime>
    </ChatWrapper>
  );
}
