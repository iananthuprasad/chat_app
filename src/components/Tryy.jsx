// AddDataComponent.js
import React, { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "../firebase";

const AddDataComponent = () => {
  const msgRef = useRef();

  
  const messagesRef = collection(firestore, "messages");

  const handleSave = async (e) => {
    e.preventDefault();

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

  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter the message</label>
        <input type="text" ref={msgRef} />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddDataComponent;
