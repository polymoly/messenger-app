import React, { useContext, useEffect, useState } from "react";
import Chat from "./Chat";
import SideMenu from "./SideMenu";
import SidePanelSearchBar from "./SidePanelSearchBar";
import { SideWrapper } from "./StyledComponents";
import {MenuContext ,DataContext} from "./Context";


export default function SidePanel({ onClick, info }) {

  const data = useContext(DataContext);

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
        {data.map((dataInfo, index) => {
          const chats = [...dataInfo.chats];
          const lastMessege = { ...chats[chats.length - 1] };
          console.log(lastMessege);
          return (
            data && (
              <Chat
                key={dataInfo.id}
                title={dataInfo.name}
                time={lastMessege.messegeTime}
                lastMessege={
                  lastMessege.messege.length > 50
                    ? `${lastMessege.messege.substring(0, 50)}...`
                    : lastMessege.messege
                }
                onClick={() => onClick(dataInfo.id,index)}
              />
            )
          );
        })}
      </SideWrapper>
      <SideMenu onClick={handleShow} />
    </MenuContext.Provider>
  );
}
