import styled, { keyframes } from "styled-components";
import { fadeIn, fadeInRight } from "react-animations";
const FadeIn = keyframes`${fadeIn}`;
const FadeInRight = keyframes`${fadeInRight}`;

const darkmodeBgColor = "#0f1724";
const secondaryColor = "#1d2636";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
export const ChatViewWrapper = styled.div`
  position: relative;
  width: calc(100% - 500px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: ${(props) => (props.darkmdoe ? secondaryColor : "#ece5dd")};
  transition: all 0.5s ease-in-out;
  margin-right: ${(props) => (props.menu ? "400px" : 0)};
`;

export const SideWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 500px;
  height: 100%;
  background-color: ${(props) => (props.darkmode ? secondaryColor : "#f1ebe7")};
  overflow-y: auto;
  overflow-x: hidden;
  transition: all 0.2s ease;
  z-index: 999;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.darkmode ? secondaryColor : "#f1ebe7")};
    transition: all 0.2s ease;
    margin-top: 70px;
  }

  &::-webkit-scrollbar-thumb {
    background: #16a191;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #128c7e;
  }
`;

export const MessegeInputWrapper = styled.div`
  position: absolute;
  z-index: 9999;
  width: 100%;
  height: 70px;
  bottom: 0;
  top: auto;
  transition: all 0.2s ease;
  /* box-shadow: 0px -1px 2px rgba(100, 100, 100, 0.15); */
  background-color: ${(props) => (props.darkmode ? secondaryColor : "#f1ebe7")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  > svg {
    font-size: 1.6rem;
    color: ${(props) => (props.darkmode ? "#f2f2f2" : "#333")};
    cursor: pointer;
    margin-right: 5px;
    &:last-child {
      color: ${(props) =>
        !props.value
          ? `${props.darkmode ? "#f2f2f2" : "#333"}`
          : `${props.darkmode ? "#f2f2f2" : "#128c7e"}`};
    }
  }
`;
export const ChatInput = styled.input`
  flex: 0.95;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 4px;
  font-size: 1.05rem;
  padding: 0 8px;
  background-color: ${(props) => (props.darkmode ? darkmodeBgColor : "#fff")};
  color: ${(props) => (props.darkmode ? "#fff" : "#222")};
  transition: all 0.2s ease;
`;

export const SideSearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  width: 100%;
  height: 70px;
  transition: all 0.2s ease;
  color: ${(props) => (props.darkmode ? "#fff" : "#222")};
  background-color: ${(props) => (props.darkmode ? secondaryColor : "#f1ebe7")};
  > svg {
    font-size: 1.3rem;
    color: ${(props) => (props.darkmode ? "#fff" : "#128c7e")}; //#128c7e
    cursor: pointer;
  }
`;

export const ChatWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 90px;

  background-color: ${(props) => (props.darkmode ? darkmodeBgColor : "#fff")};
  border-bottom: ${(props) =>
    props.darkmode
      ? `1px solid ${secondaryColor}`
      : "1px solid #e6e6e6"}; //1d2636
  padding: 0 20px;
  color: ${(props) => (props.darkmode ? "#f2f2f2" : "#222")};
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${(props) =>
      props.darkmode ? secondaryColor : "#e9e2dc80"};
  }
`;
export const ChatUnreadMsg = styled.span`
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 0.7rem;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.darkmode ? secondaryColor : "#d6d6d6")};
  color: #f2f2f2;
  min-width: 20px;
  box-shadow: ${(props) =>
    props.darkmode ? `0px 0px 2px ${darkmodeBgColor}` : "none"};
  min-height: 20px;
  padding: 0px 2px;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

export const Avatar = styled.div`
  min-width: 50px;
  min-height: 50px;
  border-radius: 50%;
  background-image: ${(props) =>
    props.gender === "male"
      ? 'url("./images/Avatar.svg")'
      : 'url("./images/girl.svg")'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ChatLabel = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 20px;
`;

export const ChatTitle = styled.span`
  width: 100%;
  font-size: 1.1rem;
  font-weight: bold;
  margin: 5px;
  text-align: left;
`;

export const LastMessege = styled.span`
  width: 100%;
  font-size: 0.9rem;
`;

export const MessegeTime = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #bbb;
  font-size: 0.85rem;
`;

export const InputSearch = styled.div`
  flex: 0.8;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
`;

export const MessegeViewWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: ${(props) => (props.reply ? "70px 0 140px 0" : "70px 0 70px 0")};
  height: 100%;
  background-color: #ece5dd;
  background-image: url("./images/bg.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: ${(props) =>
    props.darkmode ? "difference" : "normal"};
  transition: all 0.2s ease;
  overflow: hidden;
`;
export const MessegeViewHeader = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.2s ease;
  width: 100%;
  color: ${(props) => (props.darkmode ? "#fff" : "#222")};
  border-left: ${(props) =>
    props.darkmode
      ? `1px solid ${darkmodeBgColor}`
      : "1px solid #e7e2de"}; //#e7e2de
  height: 70px;
  background-color: ${(props) =>
    props.darkmode ? secondaryColor : "#f1ebe7"}; //#f1ebe7
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  top: 0;
  padding: 0 20px;
`;
export const ChatPage = styled.div`
  position: relative;
  padding: 20px 30px;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  scroll-behavior: smooth;
  transition: all 0.2s ease;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => (props.darkmode ? secondaryColor : "#f5f0ebcc")};
    transition: all 0.2s ease;
  }

  &::-webkit-scrollbar-thumb {
    background: #16a191;
    border-radius: 1px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #128c7e;
  }
`;

export const MessegeWrapper = styled.div`
  animation: 1s ${FadeIn};
  position: relative;
  min-width: 45px;
  max-width: 700px;
  margin: 40px 10px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.15);
  padding: ${(props) =>
    props.reply ? "5px 10px 20px 10px" : "5px 10px 20px 10px"};
  border-radius: 5px;
  line-height: 20px;
  transition: all 0.2s ease;
  text-align: justify;
  border-top-right-radius: ${(props) => !props.isOpponent && 0};
  border-top-left-radius: ${(props) => props.isOpponent && 0};
  margin-left: ${(props) => (props.isOpponent ? "10px" : "auto")} !important;
  background-color: ${(props) =>
    props.isOpponent
      ? props.darkmode
        ? secondaryColor
        : "#fff"
      : props.darkmode
      ? darkmodeBgColor
      : "#DCF8C6"};
  color: ${(props) => (props.darkmode ? "#f2f2f2" : "#222")};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  width: fit-content;
  > span {
    position: absolute;
    font-size: 0.7rem;
    bottom: 0;
    right: 10px;

    color: ${(props) => (props.darkmode ? "#cfcfcf" : "#555")};
    /* margin: ${(props) => (props.isOpponent ? "0 5px 0 0" : "0 0 0 5px")}; */
    font-style: normal !important;
  }
  font-style: ${(props) => (props.isDelete ? "italic" : "normal")};
  font-size: ${(props) => (props.isDelete ? "14px" : "15px")};
  &::after {
    content: " ";
    position: absolute;
    transition: all 0.2s ease;
    right: ${(props) => !props.isOpponent && "-8px"};
    left: ${(props) => props.isOpponent && "-8px"};
    bottom: calc(100% - 9px);
    border-top: 0px solid transparent;
    border-right: ${(props) =>
      !props.isOpponent
        ? "none"
        : `9px solid ${props.darkmode ? secondaryColor : "#fff"}`};
    border-left: ${(props) =>
      props.isOpponent
        ? "none"
        : `9px solid ${
            props.darkmode ? darkmodeBgColor : "#DCF8C6"
          }`}; //#DCF8C6
    border-bottom: 9px solid transparent;
    filter: drop-shadow(0px 1px 1px rgba(100, 100, 100, 0.15));
  }
`;

export const ViewUserTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 200px;
`;

export const ChatHeaderToolWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  > svg {
    font-size: 1.3rem;
    color: ${(props) => (props.darkmode ? "#fff" : "#128c7e")};
    cursor: pointer;
    &:not(:nth-child(1)) {
      margin-left: 30px;
    }
  }
`;

export const SideMenuWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 400px;
  max-width: 100%;
  position: fixed;
  border-left: ${(props) =>
    props.darkmode ? `1px solid ${secondaryColor}` : "1px solid #e0e0e0"};
  top: 0;
  right: 0;
  height: 100%;
  background-color: ${(props) => (props.darkmode ? darkmodeBgColor : "#fff")};
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    !props.messegeSearchMode ? "translateX(0)" : "translateX(100%)"};
  span {
    margin-top: 200px;
    color: #aaa;
    font-size: 0.9rem;
  }
`;

export const SidePanelInput = styled.input`
  animation: 1.3s ${FadeInRight};
  flex: 0.94;
  height: 34px;
  color: ${(props) => (props.darkmode ? "#f2f2f2" : "#222")};
  border: none;
  border-bottom: ${(props) =>
    props.darkmode ? `1px solid #777` : "1px solid #dadada"} !important;
  outline: none;
  padding: 0 5px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background-color: transparent;
  &::placeholder {
    color: #ccc;
  }
`;

export const MessegeViewInput = styled.input`
  flex: 0.8;
  height: 34px;
  border: none;
  margin-left: auto;
  margin-right: 50px;
  color: ${(props) => (props.darkmode ? "#f2f2f2" : "#222")};
  border-bottom: ${(props) =>
    props.darkmode ? `1px solid ${secondaryColor}` : "1px solid #dadada"};
  outline: none;
  padding: 0 5px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background-color: transparent;
  &::placeholder {
    color: #ccc;
  }
`;

export const ContextClick = styled.div`
  animation: 0.5s ${FadeIn};
  position: absolute;
  overflow: hidden;
  width: 110px;
  box-shadow: 0px 1px 4px rgba(100, 100, 100, 0.6);
  top: calc(100% + 4px);
  right: ${(props) => !props.isOpponent && 0};
  left: ${(props) => props.isOpponent && 0};
  background-color: ${(props) =>
    props.darkmode ? darkmodeBgColor : " #f2f2f2"};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: all 0.2s ease;
  box-shadow: 0px 0px 1px rgba(100, 100, 100, 0.2);
  span {
    color: ${(props) => (props.darkmode ? "#f2f2f2" : "#333")};
    transition: all 0.2s ease;
    font-size: 0.8rem;
    padding: 3px 8px;
    width: 100%;
    margin: 0;
    /* background-color:#222; */
    cursor: pointer;
    &:hover {
      background-color: ${(props) =>
        props.darkmode ? secondaryColor : " #e7e7e7"};
    }
  }
`;

export const UndoWrapper = styled.div`
  animation: 1s ${FadeIn};
  position: absolute;
  padding: 5px;
  width: 80px;
  top: calc(100% + 5px);
  right: ${(props) => !props.isOpponent && "-7px"};
  left: ${(props) => props.isOpponent && "-7px"};
  background-color: ${(props) =>
    props.darkmode ? darkmodeBgColor : " #16a191"};
  border-radius: 5px;
  display: flex;

  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
  box-shadow: 0px 0px 2px rgba(100, 100, 100, 0.2);
  span {
    color: #fff;
    font-size: 0.95rem;
    font-style: normal !important;
    font-family: "Roboto";
    margin-left: 7px;
  }
  &:hover {
    background-color: ${(props) =>
      props.darkmode ? secondaryColor : " #128c7e"};
  }

  small {
    margin-right: 1px;
    text-align: center;
    font-style: normal;
    font-size: 0.9rem;
  }
`;

export const ManageMenuWrapper = styled.div`
  animation: 0.5s ${FadeIn};
  width: auto;
  height: auto;
  position: absolute;
  z-index: 999;
  top: 50px;
  right: 30px;
  background-color: ${(props) => (props.darkmode ? darkmodeBgColor : "#fff")};
  transition: all 0.2s ease;
  border-radius: 5px;
  box-shadow: 0px 0px 3px rgba(100, 100, 100, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  transition: all 0.2s ease;
  span {
    font-size: 0.93rem;
    color: ${(props) => (props.darkmode ? "#fff" : "#222")};
    width: 100%;
    padding: 5px 10px;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: ${(props) =>
        props.darkmode ? secondaryColor : "#e2e2e2"};
    }
  }
`;

export const HearingModal = styled.div`
  animation: 1s ${FadeIn};
  position: absolute;
  text-align:center;
  width: 400px;
  max-width: 95%;
  margin: 0 auto;
  height: 230px;
  background-color: rgba(18, 140, 126, 0.75);
  left: 50%;
  top: 50%;
  z-index: 9999;
  transform: translate(-50%, -20%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 2px rgba(100, 100, 100, 0.2);
  span {
    font-size: 1.2rem;
    font-style: italic;
  }
  svg {
    font-size: 8rem;
  }
`;

export const Ellipsis = styled.span`
  span {
    opacity: 0;
    -webkit-animation: ellipsis-dot 1.4s infinite;
    animation: ellipsis-dot 1.4s infinite;
  }
  span:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
    margin-left: 3px;
  }
  span:nth-child(2) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  span:nth-child(3) {
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  @-webkit-keyframes ellipsis-dot {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes ellipsis-dot {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const SideMenuHeader = styled.div`
  position: relative;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  color: #aaa;
  align-items: center;
  border-bottom: ${(props) =>
    props.darkmode ? `1px solid ${secondaryColor}` : "1px solid #e2e2e2"};
  svg {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s ease;
    font-size: 1.3rem;
    color: ${(props) => (props.darkmode ? "#f2f2f2" : "#444")};
    cursor: pointer;
  }
`;

export const SideMenuInput = styled.input`
  width: 90%;
  height: 35px;
  color: ${(props) => (props.darkmode ? "#f2f2f2" : "#222")};
  border: none;
  border-bottom: ${(props) =>
    props.darkmode ? `1px solid ${secondaryColor}` : "1px solid #dadada"};
  outline: none;
  padding: 0 5px;
  margin-top: 20px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  background-color: transparent;
  &::placeholder {
    color: #ccc;
  }
`;

export const FilterSearch = styled.p`
  width: 90%;
  font-size: 0.9rem;
  text-align: left;
  color: #888;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    &:first-child {
      text-align: left;
    }
    &:nth-child(2) {
      margin-left: 5px;
    }
  }
`;

export const ReplyWrapper = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${(props) => (props.darkmode ? secondaryColor : "#f1ebe7")};
  position: absolute;
  bottom: 0px;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  padding: 1px 80px 0 40px;

  transform: ${(props) => (props.reply ? "translateY(-100%)" : "none")};
  svg {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    color: ${(props) => (props.darkmode ? "#fff" : "#222")};
  }
`;

export const ReplyMessege = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  padding: 5px 10px;
  width: 100%;
  height: 90%;
  margin: 5px 0;
  background-color: ${(props) =>
    props.darkmode ? "#0a111d" : "rgba(110, 110, 110, 0.11)"};
  color: ${(props) => (props.darkmode ? "#f2f2f2" : "#222")};
  border-left: ${(props) =>
    props.isOpponent ? "4px solid #34b7f1" : "4px solid #b819d8"};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  span {
    &:first-child {
      color: ${(props) => (props.isOpponent ? "#34b7f1" : "#b819d8")};
    }
  }
  span {
    &:nth-child(2) {
      color: ${(props) => (props.darkmode ? "#ccc" : "#222")};
    }
  }
`;

export const ReadMore = styled.span`
  color: #34b7f1;
  cursor: pointer;
  margin-left:2px;
`;
