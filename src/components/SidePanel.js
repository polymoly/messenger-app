import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import SideMenu from "./SideMenu";
import SidePanelSearchBar from "./SidePanelSearchBar";
import { SideWrapper } from "./StyledComponents";
import { Friends } from "./Server2";
import MenuContext from "./Context";

export default function SidePanel({ onClick, info, data }) {
  const [SideMenuShow, setSideMenuShow] = useState(false);
  console.log(data);

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
        {data.map((dataInfo) => {
          const chats = [...dataInfo.chats];
          const lastMessege = { ...chats[chats.length - 1] };
          console.log(lastMessege);
          return (
            data && (
              <Chat
                key={dataInfo.id}
                title={dataInfo.name}
                time={lastMessege.messegeTime}
                lastMessage={
                  lastMessege.messege &&
                  `${lastMessege.messege.substring(0, 50)}...`
                }
                onClick={() => onClick(dataInfo.id)}
              />
            )
          );
        })}
      </SideWrapper>
      <SideMenu onClick={handleShow} />
    </MenuContext.Provider>
  );
}
