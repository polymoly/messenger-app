import React from "react";
import { MessegeWrapper } from "./StyledComponents";

function Messege({ message, isOpponent }) {
  return <MessegeWrapper isOpponent={isOpponent}>{message}</MessegeWrapper>;
}

export default Messege;
