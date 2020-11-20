import React, { useContext, useState } from "react";
import {
  SideMenuWrapper,
  SideMenuHeader,
  SideMenuInput,
  FilterSearch,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import { DataContext } from "./Context";

export default function SideMenu({
  messegeSearchMode,
  title,
  onClick,
  chats,
  whatMenu,
}) {
  const [value, setValue] = useState("");
  const { darkmode } = useContext(DataContext);
  const handleMessageSearch = (e) => {
    setValue(e.target.value);
  };
  const filteredMessages = chats.filter((chat) =>
    chat.messege.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <SideMenuWrapper messegeSearchMode={messegeSearchMode} darkmode={darkmode}>
      <SideMenuHeader darkmode={darkmode}>
        <fa.FaTimes onClick={onClick} />
        Search Messages
      </SideMenuHeader>
      <SideMenuInput
        darkmode={darkmode}
        type="text"
        placeholder="Search..."
        value={value}
        onChange={handleMessageSearch}
      />
      {value &&
        filteredMessages.map((item) => {
          return (
            <FilterSearch key={item.id}>
              <p>{item.messege}</p>
              <p>{item.messegeTime}</p>
            </FilterSearch>
          );
        })}
      {(filteredMessages.length === 0 || !value) && (
        <span>Search for messages with {title}</span>
      )}
    </SideMenuWrapper>
  );
}
