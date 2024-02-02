import React, { useState } from "react";
import "./Feed.css";
import { useEffect } from "react";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "./firebase";
import User from "./User";

function Feed() {
  const [users, setUsers] = useState([]);
  // console.log(users);

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <div className="feed">
      {users.map(({ id, data: { to, subject, message } }) => (
        <User id={id} key={id} to={to} subject={subject} message={message} />
      ))}
    </div>
  );
}

export default Feed;
