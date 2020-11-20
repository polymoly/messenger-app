import React, { useContext } from "react";
import Chat from "./Chat";
import SidePanelSearchBar from "./SidePanelSearchBar";
import { SideWrapper } from "./StyledComponents";
import { DataContext } from "./Context";
export default function SidePanel({ onClick }) {
  const { data,darkmode } = useContext(DataContext);

  return (
    <SideWrapper darkmode={darkmode}>
      <SidePanelSearchBar />
      {data.map((dataInfo) => {
        const chats = [...dataInfo.chats];
        const lastMessege = { ...chats[chats.length - 1] };
        // console.log(lastMessege);
        return (
          data && (
            <Chat
              key={dataInfo.id}
              id={dataInfo.id}
              title={dataInfo.name}
              gender={dataInfo.gender}
              time={lastMessege.messegeTime}
              // data={data}
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
