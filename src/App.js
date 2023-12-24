
import React from "react";
import Tryy from './components/Tryy'
import Chatroom from "./components/Chatroom";
import Sign from "./components/Sign";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import './app.css'


const App = () => {

   

  const [user] = useAuthState(auth);
  return (
    <div className="App">

      <section>{user ? <Chatroom /> : <Sign />}</section>
    </div>
  );
};

export default App;
