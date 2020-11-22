import React, { useContext, useState } from "react";
import {
  InputSearch,
  SideSearchWrapper,
  SidePanelInput,
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import { DataContext } from "./Context";
import ReactDOM from "react-dom";
import SideMenu from "./SideMenu";
import SidePanelOffMenu from "./SidePanelOffMenu";

export default function SidePanelSearchBar() {
  const [searchMode, setSearchMode] = useState(false);
  const [starMenu, setStarMenu] = useState(false);
  const [value, setValue] = useState("");
  const { darkmode } = useContext(DataContext);
  const handleChangeMode = () => {
    setSearchMode(!searchMode);
  };

  const handleContactSearch = (e) => {
    setValue(e.target.value);
  };
  const onClickSideMenu = () => {
    setStarMenu(!starMenu);
  }
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
      <SidePanelOffMenu starMenu={starMenu} onClickSideMenu={onClickSideMenu} />
    </SideSearchWrapper>
  );
}
