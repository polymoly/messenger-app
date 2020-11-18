import React, { createRef, useEffect, useState } from "react";
import {
  Avatar,
  ChatHeaderToolWrapper,
  ChatPage,
  ChatTitle,
  MessegeViewHeader,
  MessegeViewWrapper,
  ViewUserTitle,
  MessegeViewInput,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import Messege from "./Messege";

export default function MessegeView({ title, chats = [] }) {
  const chatRef = createRef();
  const [messegeSearchMode, setMessegeSearchMode] = useState(false);

  useEffect(() => {
    chatRef.current.scrollTo(200, chatRef.current.scrollHeight);
  }, [chatRef]);

  return (
    <MessegeViewWrapper>
      <MessegeViewHeader>
        <ViewUserTitle>
          <Avatar />
          <ChatTitle>{title}</ChatTitle>
        </ViewUserTitle>
        {messegeSearchMode && (
          <MessegeViewInput placeholder="Search in messages..." />
        )}
        <ChatHeaderToolWrapper>
          {!messegeSearchMode && (
            <fa.FaSearch
              onClick={() => setMessegeSearchMode(!messegeSearchMode)}
            />
          )}
          {messegeSearchMode && (
            <fa.FaArrowRight
              onClick={() => setMessegeSearchMode(!messegeSearchMode)}
            />
          )}
          <fa.FaEllipsisV />
        </ChatHeaderToolWrapper>
      </MessegeViewHeader>
      <ChatPage ref={chatRef}>
        {chats.map((chat) => {
          return (
            <Messege
              key={chat.id}
              message={chat.messege}
              time={chat.messegeTime}
              isOpponent={chat.isOpponent}
            />
          );
        })}
      </ChatPage>
    </MessegeViewWrapper>
  );
}
