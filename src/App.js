import { useState } from "react";
import "./App.css";
import SendMail from "./SendMail";
import Feed from "./Feed";

function App() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="App">
      <SendMail
        to={to}
        setTo={setTo}
        subject={subject}
        setSubject={setSubject}
        message={message}
        setMessage={setMessage}
      />
      <Feed />
    </div>
  );
}

export default App;
