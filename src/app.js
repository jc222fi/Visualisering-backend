const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({port: process.env.PORT || 5000});
const store = require("./store/store");
const actions = require("./store/actions");



wss.on('connection', ws => {
  ws.send("Hello");
});

