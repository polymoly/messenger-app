import React from "react";
import { InputSearch, SideSearchWrapper } from "./StyledComponents";
import * as fa from "react-icons/fa";

export default function SidePanelSearchBar({ onClick}) {
  return (
    <SideSearchWrapper>
      <fa.FaBars onClick={onClick}  />
      <InputSearch>Amazing Messenger</InputSearch>
      <fa.FaSearch />
    </SideSearchWrapper>
  );
}
