import { useEffect, useState } from "react";
import ChatView from "./components/ChatView";
import SideMenu from "./components/SideMenu";
import SidePanel from "./components/SidePanel";
import { Wrapper } from "./components/StyledComponents";
import { DataContext } from "./components/Context";

function App() {
  const [id, setId] = useState(null);
  const [data, setData] = useState([]);
  const [gender,setGender] = useState(null);
  const onClick = (id,gender) => {
    setId(id);
    setGender(gender);
    // setIndex(index);
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
    <DataContext.Provider value={data}>
      <Wrapper>
        <SidePanel onClick={onClick} />
        <ChatView id={id} gender={gender}  />
      </Wrapper>
    </DataContext.Provider>
  );
}

export default App;
