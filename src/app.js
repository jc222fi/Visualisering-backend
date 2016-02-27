const WebSocketServer = require("ws").Server;
const actions = require("./store/actions");
const store = require("./store/store");
const githubService = require("./services/github-service");

const wss = new WebSocketServer({port: process.env.PORT || 5000});

wss.on('connection', ws => {
  ws.send("Hello");
});

githubService.latestCommits("Visualisering", "Visualisering-frontend");



