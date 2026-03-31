const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

// Uncomment the code below to pass the first stage
const server = net.createServer((connection) => {
  // Handle connection
});

const port = 6379;
server.listen(port, "127.0.0.1");
console.log("Listening on port ", port);
