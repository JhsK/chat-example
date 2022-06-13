// const express = require("express");
// const http = require("http");
// const socketIO = require("socket.io");

// // localhost 포트 설정
// const port = 4002;

// const app = express();

// // server instance
// const server = http.createServer(app);

// // socketio 생성후 서버 인스턴스 사용
// const io = socketIO(server);

const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
}); //cors 오류로 인한 설정

const port = 4002;

// socketio 문법
io.on("connection", (socket) => {
  socket.on("send message", (item) => {
    const msg = item.name + " : " + item.message;
    console.log(msg);
    io.emit("receive message", { name: item.name, message: item.message });
  });
  socket.on("disconnect", function () {
    console.log("user disconnected: ", socket.id);
  });
});

httpServer.listen(port, () => console.log(`Listening on port ${port}`));
