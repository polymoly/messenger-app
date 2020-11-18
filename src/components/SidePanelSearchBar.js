import React, { createRef, useRef, useState } from "react";
import { InputSearch, SideSearchWrapper,SidePanelInput } from "./StyledComponents";
import * as fa from "react-icons/fa";

export default function SidePanelSearchBar({ onClick }) {
  const [searchMode, setSearchMode] = useState(false);
 ;
  const handleChangeMode = () => {
    setSearchMode(!searchMode);
   
  };


  return (
    <SideSearchWrapper>
      {!searchMode ? (
        <fa.FaBars onClick={onClick} />
      ) : (
        <fa.FaArrowLeft onClick={handleChangeMode} />
      )}
      {!searchMode && <InputSearch>Amazing Messenger</InputSearch>}
      {searchMode && <SidePanelInput type="text" placeholder="Search in contacts..." />}
      {!searchMode && <fa.FaSearch onClick={handleChangeMode} />}
    </SideSearchWrapper>
  );
}
