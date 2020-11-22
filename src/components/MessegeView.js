import React, {
  createRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Avatar,
  ChatHeaderToolWrapper,
  ChatPage,
  ChatTitle,
  MessegeViewHeader,
  MessegeViewWrapper,
  ViewUserTitle,
  ManageMenuWrapper,
  HearingModal,
  Ellipsis,
  MessageContainer
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import { MdHearing } from "react-icons/md";
import Messege from "./Messege";
import SideMenu from "./SideMenu";
import { DataContext } from "./Context";

export default function MessegeView({
  title,
  chats = [],
  record,
  isOpen,
  gender,
  onClick,
  handleReply,
  isVoiceSupport,
  reply,
}) {
  const [messegeSearchMode, setMessegeSearchMode] = useState(true);
  const [manageMenu, setManageMenu] = useState(false);
  const { darkmode } = useContext(DataContext);
  const chatRef = useRef();
  useEffect(() => {
    chatRef.current.scrollTo(0, chatRef.current.scrollHeight);
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
  const handleMenu = (e) => {
    setMessegeSearchMode(!messegeSearchMode);
    isOpen(messegeSearchMode);
  };
  return (
    <MessegeViewWrapper darkmode={darkmode} reply={reply}>
      <MessegeViewHeader darkmode={darkmode}>
        <ViewUserTitle onClick={handleMenu}>
          <Avatar gender={gender} />
          <ChatTitle>{title}</ChatTitle>
        </ViewUserTitle>
        {/* {messegeSearchMode && (
          <MessegeViewInput placeholder="Search in messages..." />
        )} */}
        <ChatHeaderToolWrapper darkmode={darkmode}>
          {!darkmode && <fa.FaMoon onClick={onClick} />}
          {darkmode && <fa.FaSun onClick={onClick} />}
          <fa.FaSearch onClick={handleMenu} />

          <fa.FaEllipsisV onClick={() => setManageMenu(!manageMenu)} />
        </ChatHeaderToolWrapper>
        {manageMenu && (
          <ManageMenuWrapper darkmode={darkmode}>
            <span>Clear chat history</span>
            <span>Delete this contact</span>
          </ManageMenuWrapper>
        )}
      </MessegeViewHeader>
      {!record && (
        <HearingModal>
          <MdHearing />
          {isVoiceSupport ? (
            <span>
              Listening
              <Ellipsis>
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </Ellipsis>
            </span>
          ) : (
            "Your PC doesnt support voice chat , or we have no access to your mic."
          )}
        </HearingModal>
      )}
      <ChatPage
        darkmode={darkmode}
        ref={chatRef}
        onClick={handleClearWindow}
        onContextMenu={rightClickHistory}
      >
        {chats.map((chat) => {
          return (
            <MessageContainer key={chat.id}>
              <Messege
                
                message={chat.messege}
                time={chat.messegeTime}
                isOpponent={chat.isOpponent}
                handleReply={() => handleReply(chat.messege)}
                reply={reply}
                id={chat.id}
              />
            </MessageContainer>
          );
        })}
      </ChatPage>
      <SideMenu
        messegeSearchMode={messegeSearchMode}
        title={title}
        onClick={handleMenu}
        chats={chats}
      />
    </MessegeViewWrapper>
  );
}
