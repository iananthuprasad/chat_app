import React, { useRef, useState,useEffect } from "react";
import { auth, firestore } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Chatroom = () => {
  const [data, setData] = useState([]);
  const msgRef = useRef();
  

  function logout() {
    auth.signOut();
    localStorage.clear();
    window.location.reload();
  }



  const handleSave = async (e) => {
    e.preventDefault();
    
    const messagesRef = collection(firestore, "messages");

    const data = {
      message: msgRef.current.value,
    };

    try {
      await addDoc(messagesRef, data);
      console.log("Data added successfully!");
      // You can perform additional actions after data is added
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };




useEffect(() => {
  const fetchData = async () => {

    const collectionRef = collection(firestore,"messages");    
    const dbval=await getDocs(collectionRef)

      const newData = dbval.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(newData);
  };

  fetchData();
}, []);



  return (
    <div>
      <h2>Chat</h2>
      <div>
        {data.map((doc, index) => (
          <div key={index}>{doc.message}</div>
        ))}
      </div>
      <div>
        <form onSubmit={handleSave}>
          <label>Enter the message</label>
          <input type="text" ref={msgRef} />
          <button type="submit">Send</button>
        </form>
      </div>
      <div>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Chatroom;
