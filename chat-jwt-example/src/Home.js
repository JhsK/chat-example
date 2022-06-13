import React, { useEffect } from "react";
import "./Home.css";
import socketIOClient from "socket.io-client";

const Home = () => {
  const [messageList, setMessageList] = React.useState([]);
  const [name, setName] = React.useState("");
  const [value, setValue] = React.useState("");

  const socket = socketIOClient("http://localhost:4002");

  const submit = (e) => {
    e.preventDefault();
    socket.emit("send message", { name: name, message: value });
  };

  useEffect(() => {
    console.log("use effect");
    socket.on("receive message", (message) => {
      console.log(message);
      setMessageList((messageList) => messageList.concat(message));
    });
  }, []);

  console.log("render");

  return (
    <div className="App">
      <section className="chat-list">
        {messageList.map((item, i) => (
          <div key={i} className="message">
            <p className="username">{item.name.toUpperCase()}</p>
            <p className="message-text">{item.message}</p>
          </div>
        ))}
      </section>
      <form className="chat-form" onSubmit={(e) => submit(e)}>
        <div className="chat-inputs">
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="유저이름"
          />
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="메세지입력하기"
          />
        </div>
        <button type="submit">입력하기</button>
      </form>
    </div>
  );
};

export default Home;
