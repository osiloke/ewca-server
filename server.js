const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json", { foreignKeySuffix: "_id" });
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`Test Custom Data API listening on port ${port}!`);
});
