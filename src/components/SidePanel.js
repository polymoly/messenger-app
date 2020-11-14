import React, { useState } from "react";
import Chat from "./Chat";
import SideMenu from "./SideMenu";
import SidePanelSearchBar from "./SidePanelSearchBar";
import { SideWrapper } from "./StyledComponents";
import { Friends } from "./Server";
import MenuContext from "./Context";

export default function SidePanel({onClick}) {
  const [SideMenuShow, setSideMenuShow] = useState(false);

  const handleClick = () => {
    setSideMenuShow(true);
  };

  const handleShow = () => {
    setSideMenuShow(false);
  };
  return (
    <MenuContext.Provider value={SideMenuShow}>
      <SideWrapper>
        <SidePanelSearchBar onClick={handleClick} />
        {Friends.map((friend) => {
          const chats = [...friend.chats];
          const lastMessage = {...chats[chats.length - 1]}
          return (
            <Chat
              key={friend.id}
              title={friend.name}
              lastMessage={lastMessage.message && `${lastMessage.message.substring(0,50)}...`}
              onClick={() => onClick(friend.id)}
            />
          );
        })}
      </SideWrapper>
      <SideMenu onClick={handleShow} />
    </MenuContext.Provider>
  );
}
