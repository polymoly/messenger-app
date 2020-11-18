import { useEffect, useState } from "react";
import ChatView from "./components/ChatView";
import SideMenu from "./components/SideMenu";
import SidePanel from "./components/SidePanel";
import { Wrapper } from "./components/StyledComponents";

function App() {
  const [id, setId] = useState(null);

  const [data, setData] = useState([]);
  const onClick = (id) => {
    setId(id);
  };

  useEffect(() => {
    if (!id) {
      fetch("http://localhost:3001/getfirstinfo")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setData(data);
          }
        });
    }
  }, []);

  return (
    <Wrapper>
      <SidePanel onClick={onClick} data={data} />
      <ChatView id={id} />
    </Wrapper>
  );
}

export default App;
