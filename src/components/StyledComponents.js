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
  padding:70px 0;
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
  scroll-behavior:smooth;
`;

export const MessegeWrapper = styled.div`
  margin: 40px 30px;
  padding: 4px 10px;
  border-radius: 5px;
  margin-left: ${(props) => (props.isOpponent ? "30px" : "auto")} !important;
  background-color: ${(props) => (props.isOpponent ? "#DCF8C6" : "#25D366")};
  color: ${(props) => (props.isOpponent ? "#222" : "#f2f2f2")};
  display: flex;
  width: fit-content;
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
    margin-left: 30px;
    color: #128c7e;
    cursor: pointer;
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
