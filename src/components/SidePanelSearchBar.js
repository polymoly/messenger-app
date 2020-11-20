import React, { useContext, useState } from "react";
import {
  InputSearch,
  SideSearchWrapper,
  SidePanelInput,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import { DataContext } from "./Context";

export default function SidePanelSearchBar({ onClickSideMenu }) {
  const [searchMode, setSearchMode] = useState(false);
  const [value, setValue] = useState("");
  const {darkmode} = useContext(DataContext);
  const handleChangeMode = () => {
    setSearchMode(!searchMode);
  };

  const handleContactSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <SideSearchWrapper darkmode={darkmode}>
      {!searchMode ? (
        <fa.FaBars onClick={onClickSideMenu} />
      ) : (
        <fa.FaArrowLeft onClick={handleChangeMode} />
      )}
      {!searchMode && <InputSearch>Mapsa Messenger</InputSearch>}
      {searchMode && (
        <SidePanelInput
          type="text"
          placeholder="Search in contacts..."
          value={value}
          onChange={handleContactSearch}
          darkmode={darkmode}
        />
      )}
      {!searchMode && <fa.FaSearch onClick={handleChangeMode} />}
    </SideSearchWrapper>
  );
}
