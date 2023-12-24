
import React from "react";
import Tryy from './components/Tryy'
import Chatroom from "./components/Chatroom";
import Sign from "./components/Sign";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";


const App = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
      </header>

      <section>{user ? <Chatroom /> : <Sign />}</section>
    </div>
  );
};

export default App;
