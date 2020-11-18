import React from "react";
import { SideMenuWrapper } from "./StyledComponents";
import * as fa from "react-icons/fa";
import {MenuContext} from "./Context";
export default function SideMenu({ onClick }) {
  return (
    <MenuContext.Consumer>
      {(SideMenuShow) => {
        return (
          <SideMenuWrapper SideMenuShow={SideMenuShow}>
            <fa.FaArrowLeft onClick={onClick} />
          </SideMenuWrapper>
        );
      }}
    </MenuContext.Consumer>
  );
}
