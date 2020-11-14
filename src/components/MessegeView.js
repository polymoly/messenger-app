import React, { createRef, useEffect } from "react";
import {
  Avatar,
  ChatHeaderToolWrapper,
  ChatPage,
  ChatTitle,
  MessegeViewHeader,
  MessegeViewWrapper,
  ViewUserTitle,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import Messege from "./Messege";

export default function MessegeView({ title, chats = [] }) {
  const chatRef = createRef();

  useEffect(() => {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
  }, [chatRef]);

  return (
    <MessegeViewWrapper>
      <MessegeViewHeader>
        <ViewUserTitle>
          <Avatar />
          <ChatTitle>{title}</ChatTitle>
        </ViewUserTitle>
        <ChatHeaderToolWrapper>
          <fa.FaSearch />
          <fa.FaEllipsisV />
        </ChatHeaderToolWrapper>
      </MessegeViewHeader>
      <ChatPage ref={chatRef}>
        {chats.map((chat) => {
          return (
            <Messege
              key={chat.id}
              message={chat.message}
              isOpponent={chat.isOpponent}
            />
          );
        })}
      </ChatPage>
    </MessegeViewWrapper>
  );
}
