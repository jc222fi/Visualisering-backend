const WebSocketServer = require("ws").Server;
const wss = new WebSocketServer({port: process.env.PORT || 5000});
const store = require("./src/store");
const actions = require("./src/actions");