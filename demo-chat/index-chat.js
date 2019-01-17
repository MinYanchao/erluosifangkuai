var ws = require("nodejs-websocket");
var num =0;
var server = ws.createServer(function (conn) {
  num++
  conn.nickname = "用户" + num;
  notification(conn.nickname + "进入聊天/1");
  conn.on('text',function (str) {
    notification(conn.nickname+":"+str)
  })
  conn.on("close", function (code, reason) {
    // console.log("Connection closed")
    notification(conn.nickname + "已离开/1")
  })
  conn.on("error", function (err) {
    console.log("error",err)
  })
}).listen(8002)

function notification(str) {
  server.connections.forEach(function (conn) {
    conn.sendText(str)
  })
}