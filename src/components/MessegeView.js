import React, { createRef, useCallback, useEffect, useState } from "react";
import {
  Avatar,
  ChatHeaderToolWrapper,
  ChatPage,
  ChatTitle,
  MessegeViewHeader,
  MessegeViewWrapper,
  ViewUserTitle,
  MessegeViewInput,
  ManageMenuWrapper,
  HearingModal,
  Ellipsis,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import { MdHearing } from "react-icons/md";
import Messege from "./Messege";

export default function MessegeView({ title, chats = [], record }) {
  const chatRef = createRef();

  const [messegeSearchMode, setMessegeSearchMode] = useState(false);
  const [manageMenu, setManageMenu] = useState(false);

  useEffect(() => {
    chatRef.current.scrollTo(200, chatRef.current.scrollHeight);
  }, [chatRef]);

  const rightClickHistory = useCallback((e) => {
    if (e.type === "contextmenu") {
      e.preventDefault();
      e.stopPropagation();
      setManageMenu(false);
    }
  }, []);
  const handleClearWindow = () => {
    setManageMenu(false);
  };
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
          <fa.FaEllipsisV onClick={() => setManageMenu(!manageMenu)} />
        </ChatHeaderToolWrapper>
        {manageMenu && (
          <ManageMenuWrapper>
            <span>Clear chat history</span>
            <span>Delete this contact</span>
          </ManageMenuWrapper>
        )}
      </MessegeViewHeader>
      {!record && (
        <HearingModal>
          <MdHearing />
          <span>
            Listening 
            <Ellipsis>
              <span>.</span>
              <span>.</span>
              <span>.</span>
            </Ellipsis>
          </span>
        </HearingModal>
      )}
      <ChatPage
        ref={chatRef}
        onClick={handleClearWindow}
        onContextMenu={rightClickHistory}
      >
        {chats.map((chat) => {
          return (
            <Messege
              key={chat.id}
              message={chat.messege}
              time={chat.messegeTime}
              isOpponent={chat.isOpponent}
              id={chat.id}
            />
          );
        })}
      </ChatPage>
    </MessegeViewWrapper>
  );
}
