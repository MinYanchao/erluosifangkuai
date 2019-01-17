
var http = require("http").createServer();
var io = require("socket.io")(http);
var num =0;
http.listen(8002);
io.on('connection',function (socket) {
  num++
  socket.nickname = "用户" + num;
  io.emit("enter",socket.nickname + "进入聊天")

  socket.on("message",function (str) {
    io.emit("message",socket.nickname+":"+str)
  })
  socket.on('disconnect',function () {
    io.emit('disconnect',socket.nickname + "已离开")
  })
})
