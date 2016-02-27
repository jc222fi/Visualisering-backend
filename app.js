const WebSocketServer = require("ws").Server;
const actions = require("./src/store/actions");
const store = require("./src/store/store");
const githubService = require("./src/services/github-service");

const wss = new WebSocketServer({port: process.env.PORT || 5000});

store.subscribe(
  () => {
    if (store.getState()) {
      const storeData = store.getState();

      wss.broadcast(action);
    }
  }
);

wss.broadcast = data => wss.clients.forEach(client => client.send(data));

wss.on('connection', ws => {
  ws.send("Client connected");

  ws.on("message", message => {
    console.log(`Received message from client: ${message}`)
  })
});

githubService.latestCommits("Visualisering", "Visualisering-frontend");



