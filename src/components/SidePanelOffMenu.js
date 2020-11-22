import React, { useState } from "react";
import {
  SidePanelBody,
  SidePanelMenu,
  SidePanelMenuHeader,
  UnstarAllBtn
} from "./StyledComponents";
import * as fa from "react-icons/fa";
import StarredMessage from "./StarredMessage";

export default function SideMenu({ starMenu, onClickSideMenu }) {
    const [unstarAll,setUnstarAll] = useState(false);


  return (
    <SidePanelMenu starMenu={starMenu}>
      <SidePanelMenuHeader>
        <fa.FaArrowLeft onClick={onClickSideMenu} />
        <span>Starred messages</span>
        <fa.FaEllipsisV onClick={() => setUnstarAll(!unstarAll)} />
        {unstarAll && <UnstarAllBtn>Unstar all</UnstarAllBtn>}
      </SidePanelMenuHeader>
      <SidePanelBody>
        <StarredMessage />
        <StarredMessage />
        <StarredMessage />
      </SidePanelBody>
    </SidePanelMenu>
  );
}
