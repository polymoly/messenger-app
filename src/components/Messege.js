import React, {
  createRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { MessegeWrapper, ContextClick, UndoWrapper } from "./StyledComponents";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Fade } from "react-reveal";
import { DataContext } from "./Context";
function Messege({ message, isOpponent, time }) {
  const [isRightclick, setIsRighClick] = useState(false);
  const [undo, setUndo] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
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
  return (
    <MessegeWrapper
      darkmode={darkmode}
      ref={contextRef}
      onContextMenu={handleRightClick}
      isOpponent={isOpponent}
      isDelete={isDelete}
    >
      {isRightclick && (
        <ContextClick
          darkmode={darkmode}
          isOpponent={isOpponent}
          isRightclick={isRightclick}
          onClick={handleDelete}
        >
          Delete message
        </ContextClick>
      )}
      {!isDelete
        ? message
        : !isOpponent
        ? "You deleted this message"
        : "This message was deleted"}
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
