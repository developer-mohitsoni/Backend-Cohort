import net from "node:net";

// Create a TCP server
const server = net.createServer((socket) => {
  console.log("Client connected", socket);

  socket.on("data", (chunk) => {
    console.log("Received:", chunk.toString());

    socket.write(`Server Received: ${chunk}`);

    socket.end();
  });

  socket.on("error", (err) => {
    console.log(`Error: ${err}`);
  });
});

server.listen(3000, () => {
  console.log("Server started on port 3000");
});
