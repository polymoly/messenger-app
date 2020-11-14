import { useState } from 'react';
import ChatView from './components/ChatView';
import SideMenu from './components/SideMenu';
import SidePanel from './components/SidePanel';
import {Wrapper} from './components/StyledComponents';




function App() {
  const [id,setId] = useState(null);

  const onClick = (id) => {
    setId(id);
  }
  return (
    <Wrapper>
     <SidePanel onClick={onClick} />
     <ChatView id={id} />
    </Wrapper>
  );
}

export default App;
