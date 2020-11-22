import React, {
  createRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  MessegeWrapper,
  ContextClick,
  UndoWrapper,
  ReplyMessege,
  ReadMore
} from "./StyledComponents";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import { DataContext } from "./Context";
function Messege({ message, isOpponent, time, handleReply, reply, id }) {
  const [isRightclick, setIsRighClick] = useState(false);
  const [undo, setUndo] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const { darkmode } = useContext(DataContext);
  const contextRef = createRef();
  const handleRightClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "contextmenu") {
      if (!isDelete) {
        setIsRighClick(true);
      }
    }
  };

  const clickRemoval = (e) => {
    e.preventDefault();
    setIsRighClick(false);
  };

  const rightClickRemoval = useCallback(
    (e) => {
      if (e.type === "contextmenu" && contextRef.current) {
        setIsRighClick(false);
      }
    },
    [contextRef]
  );

  useEffect(() => {
    window.addEventListener("click", clickRemoval);
    window.addEventListener("contextmenu", rightClickRemoval);

    return () => {
      window.removeEventListener("click", clickRemoval);
      window.removeEventListener("contextmenu", rightClickRemoval);
    };
  }, [rightClickRemoval]);
  const handleDelete = () => {
    setIsDelete(true);
    setUndo(true);
  };
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      setUndo(false);
    } else {
      return <small>{remainingTime}</small>;
    }
  };

  const handleUndo = () => {
    setIsDelete(false);
    setUndo(false);
  };

  const handleCollapse =() => {
    setIsCollapse(true)
  }
  return (
    <MessegeWrapper
      darkmode={darkmode}
      ref={contextRef}
      onContextMenu={handleRightClick}
      isOpponent={isOpponent}
      isDelete={isDelete}
      reply={reply}
    >
      {isRightclick && (
        <ContextClick
          darkmode={darkmode}
          isOpponent={isOpponent}
          isRightclick={isRightclick}
        >
          <span onClick={handleDelete}>Delete message</span>
          <span onClick={handleReply}>Reply message</span>
        </ContextClick>
      )}
      {reply && (
        <ReplyMessege isOpponent={isOpponent} darkmode={darkmode}>
          <span>{!isOpponent ? "You" : "Alireza"}</span>
          <span>
            {message.length > 290 ? `${message.substring(0, 290)}...` : message}
          </span>
        </ReplyMessege>
      )}
      {!isDelete ? (
        !isCollapse ? (
          message.length > 600 ? (
            <div>
              {message.substring(0, 600)}...<ReadMore onClick={handleCollapse}>Read more</ReadMore>
            </div>
          ) : (
            message
          )
        ) : (
          message
        )
      ) : !isOpponent ? (
        "You deleted this message"
      ) : (
        "This message was deleted"
      )}
      <span>{time}</span>
      {undo && (
        <UndoWrapper
          isOpponent={isOpponent}
          onClick={handleUndo}
          darkmode={darkmode}
        >
          <CountdownCircleTimer
            size={25}
            strokeWidth={3}
            trailColor="transparent"
            isPlaying
            duration={5}
            colors={[["#fff"]]}
            onComplete={() => [true, 1000]}
          >
            {renderTime}
          </CountdownCircleTimer>
          <span>undo</span>
        </UndoWrapper>
      )}
    </MessegeWrapper>
  );
}

export default Messege;
