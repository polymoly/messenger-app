import styled from "styled-components";

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
  background-color: #ece5dd;
`;

export const SideWrapper = styled.div`
  position: relative;
  max-width: 100%;
  width: 500px;
  height: 100%;
  background-color: #ffffff;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f0ebcc;
  }

  &::-webkit-scrollbar-thumb {
    background: #16a191;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #128c7e;
  }
`;

export const MessegeInputWrapper = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 70px;
  bottom: 0;
  top: auto;
  background-color: #f5f0ebcc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  padding: 0 20px;
  > svg {
    font-size: 1.6rem;
    color: #333;
    cursor: pointer;
    margin-right: 5px;
    &:last-child {
      color: ${(props) => (!props.value ? "#333" : "#128c7e")};
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
`;

export const SideSearchWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 70px;
  background-color: #f5f0ebcc;
  > svg {
    font-size: 1.3rem;
    color: #128c7e;
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
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 0 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #e9e2dc80;
  }
  &:not(:last-child) {
    border-bottom: none;
  }
`;

export const Avatar = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-image: url("./images/Avatar.svg");
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
  font-size: 0.95rem;
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
  padding: 70px 0;
  height: 100%;
  background-color: #ece5dd;
  background-image: url("./images/chatview-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
`;
export const MessegeViewHeader = styled.div`
  z-index: 2;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: #fff;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
  top: 0;
  padding: 0 20px;
`;
export const ChatPage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f5f0ebcc;
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
  position: relative;
  margin: 40px 30px;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.2);
  padding: 5px 10px 5px 10px;
  border-radius: 5px;
  margin-left: ${(props) => (props.isOpponent ? "30px" : "auto")} !important;
  background-color: ${(props) => (props.isOpponent ? "#F2F2F2" : "#DCF8C6")};
  color: #222;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => (props.isOpponent ? "row-reverse" : "row")};
  align-items: center;
  width: fit-content;
  span {
    font-size: 0.7rem;
    color: #555;
    margin: ${(props) => (props.isOpponent ? "0 5px 0 0" : "0 0 0 5px")};
    font-style: normal !important;
  }
  font-style: ${(props) => (props.isDelete ? "italic" : "normal")};
  font-size: ${(props) => (props.isDelete ? "14px" : "15px")}; ;
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
  > svg {
    font-size: 1.3rem;
    color: #128c7e;
    cursor: pointer;
    &:not(:nth-child(1)) {
      margin-left: 30px;
    }
  }
`;

export const SideMenuWrapper = styled.div`
  position: relative;
  width: 500px;
  max-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: #fff;
  border-right: 1px solid #e0e0e0;
  transition: all 0.5s ease-in-out;
  transform: ${(props) =>
    props.SideMenuShow ? "translateX(0)" : "translateX(-100%)"};

  > svg {
    font-size: 1.3rem;
    transition: all 0.7s ease-in-out;
    position: absolute;
    opacity: ${(props) => (props.SideMenuShow ? 1 : 0)};
    right: 20px;
    top: 35px;
    color: #128c7e;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;

export const SidePanelInput = styled.input`
  flex: 0.94;
  height: 34px;

  color: #222;
  border: none;
  border-bottom: 1px solid #dadada;
  outline: none;
  padding: 0 5px;
  font-size: 0.9rem;
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
  border-bottom: 1px solid #dadada;
  outline: none;
  padding: 0 5px;
  font-size: 0.9rem;
  background-color: transparent;
  &::placeholder {
    color: #ccc;
  }
`;

export const ContextClick = styled.div`
  position: absolute;
  padding: 9px 4px;
  width: 100px;
  box-shadow: 0px 1px 4px rgba(100, 100, 100, 0.6);
  bottom: 30px;
  right: ${(props) => !props.isOpponent && 0};
  left: ${(props) => props.isOpponent && 0};
  background-color: #555;
  color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-family: "Roboto";
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 0px 2px rgba(100, 100, 100, 0.2);
  &:hover {
    background-color: #444;
  }
`;

export const UndoWrapper = styled.div`
  position: absolute;
  padding: 5px;
  width: 80px;
  top: 30px;
  right: ${(props) => !props.isOpponent && 0};
  left: ${(props) => props.isOpponent && 0};
  background-color: #16a191;
  border-radius: 5px;
  display: flex;

  align-items: center;
  transition: all 0.2s ease-in-out;
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
    background-color: #128c7e;
  }

  small {
    margin-right: 1px;
    text-align: center;
    font-style: normal;
    font-size: 0.9rem;
  }
`;
