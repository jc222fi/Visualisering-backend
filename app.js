const WebSocketServer = require("ws").Server;
const httpServer = require("./src/lib/http-server");
const actions = require("./src/store/actions");
const store = require("./src/store/store");
const sphere = require("./src/data-processors/sphere");

const server = httpServer.init();
const wss = new WebSocketServer({server});

// Hookup datastore and processors
sphere.dataSet()
  .then(commits => store.dispatch(actions.addLatestCommits(commits)));

store.subscribe(
  () => {
    if (store.getState()) {
      const storeData = store.getState();

      console.log(storeData);

      wss.broadcast(storeData);
    }
  }
);

wss.broadcast = data => wss.clients.forEach(client => client.send(data));

wss.on('connection', ws => {
  ws.send("Client connected");

  ws.on("message", message => {
    // Respond to requests
    console.log(`Received message from client: ${message}`)
  })
});
