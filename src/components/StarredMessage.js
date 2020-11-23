import React from "react";
import * as fa from "react-icons/fa";
import Messege from "./Messege";
import {
  Avatar,
  StarredMessageWrapper,
  UserStarred,
  UserInfo,
  StarredTime,
  StarMessage,
} from "./StyledComponents";

export default function StarredMessage() {
  return (
    <StarredMessageWrapper>
      <UserStarred>
        <UserInfo>
          <Avatar gender="male" /> <span>amirhosein&#12539;you</span>
        </UserInfo>
        <StarredTime>
          <span>22:44</span>
          <fa.FaChevronRight />
        </StarredTime>
      </UserStarred>
      <StarMessage>
        <Messege message="salam" time="22:44" isOpponent={true} />
        <fa.FaStar />
      </StarMessage>
    </StarredMessageWrapper>
  );
}
