import React, { useState } from "react";
import {
  SideMenuWrapper,
  SideMenuHeader,
  SideMenuInput,
  FilterSearch,
} from "./StyledComponents";
import * as fa from "react-icons/fa";

export default function SideMenu({ messegeSearchMode, title, onClick, chats }) {
  const [value, setValue] = useState("");

  const handleMessageSearch = (e) => {
    setValue(e.target.value);
  };
  const filteredMessages = chats.filter((chat) =>
    chat.messege.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <SideMenuWrapper messegeSearchMode={messegeSearchMode}>
      <SideMenuHeader>
        <fa.FaTimes onClick={onClick} />
        Search Messages
      </SideMenuHeader>
      <SideMenuInput
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
