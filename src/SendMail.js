import React from "react";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";

function SendMail({ to, setTo, subject, setSubject, message, setMessage }) {
  // Add User
  const sendMail = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "users"), {
        to: to,
        subject: subject,
        message: message,
      });
      console.log("Document Added");
    } catch (e) {
      console.log("Error adding document:", e);
    }
    // Get All Users
    // const querySnapshot = await getDocs(collection(db, "users"));
    // let users = [];
    // querySnapshot.forEach((doc) => {
    //   users.push((doc.id, doc.data()));

    // });
    // console.log("user", users[0]);
  };

  // Get Single User
  // const getSingleDoc = () => {
  //   const docRef = doc(db, "users", "1WzjgBp3p1IUb4cdswpo");
  //   getDoc(docRef).then((doc) => {
  //     console.log(doc.data(), doc.id);
  //   });
  // };

  return (
    <div className="sendMail">
      <form onSubmit={sendMail}>
        <input
          type="text"
          placeholder="to"
          name="to"
          onChange={(e) => setTo(e.target.value)}
        />
        <input
          type="text"
          placeholder="subject"
          name="subject"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="text"
          placeholder="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Submit</button>
        <button> Submit</button>
      </form>
    </div>
  );
}

export default SendMail;
