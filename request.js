const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log("home", req.url);

  res.write("<h1>Home Page</h1>");
  res.end();
});
server.listen("6100");
