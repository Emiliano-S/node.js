const { createServer } = require("node:http");

function createApp() {
  return createServer((req, res) => {
    console.log("request received");

    res.statusCode = 200;

    res.setHeader("Content-Type", "text/html");

    res.end("Welcome to the World Wide Web!");
  });
}
module.exports = createApp;