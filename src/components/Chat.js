import React, { useContext } from "react";
import { DataContext } from "./Context";
import {
  Avatar,
  ChatLabel,
  ChatTitle,
  ChatWrapper,
  LastMessege,
  MessegeTime,
  ChatUnreadMsg,
} from "./StyledComponents";

export default function Chat({
  title,
  lastMessege,
  onClick,
  time,
  gender,
  id,
}) {
  const {data,darkmode} = useContext(DataContext);

  const currentContactUnreadMsgLen = data
    .find((contact) => contact.id === id)
    .chats.filter((chat) => chat.isOpponent).length;

  return (
    <ChatWrapper onClick={onClick} darkmode={darkmode}>
      <Avatar gender={gender} />
      <ChatLabel>
        <ChatTitle>{title}</ChatTitle>
        <LastMessege>{lastMessege}</LastMessege>
      </ChatLabel>
      <MessegeTime>{time}</MessegeTime>
      <ChatUnreadMsg darkmode={darkmode}>{currentContactUnreadMsgLen}</ChatUnreadMsg>
    </ChatWrapper>
  );
}
