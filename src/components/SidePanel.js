import React, { useContext, useEffect, useState } from "react";
import Chat from "./Chat";
import SideMenu from "./SideMenu";
import SidePanelSearchBar from "./SidePanelSearchBar";
import { SideWrapper } from "./StyledComponents";
import { DataContext } from "./Context";

export default function SidePanel({ onClick, info }) {
  const data = useContext(DataContext);

  return (
    <SideWrapper>
      <SidePanelSearchBar />
      {data.map((dataInfo) => {
        const chats = [...dataInfo.chats];
        const lastMessege = { ...chats[chats.length - 1] };
        console.log(lastMessege);
        return (
          data && (
            <Chat
              key={dataInfo.id}
              title={dataInfo.name}
              gender={dataInfo.gender}
              time={lastMessege.messegeTime}
              lastMessege={
                lastMessege.messege.length > 50
                  ? `${lastMessege.messege.substring(0, 50)}...`
                  : lastMessege.messege
              }
              onClick={() => onClick(dataInfo.id, dataInfo.gender)}
            />
          )
        );
      })}
    </SideWrapper>
  );
}
