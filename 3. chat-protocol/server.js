// Server Code
import net from "node:net";

const clients = [];

// Create a TCP server
const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.setEncoding("utf-8");

  socket.authenticated = false;

  socket.joined = false;

  socket.username = "";

  clients.push(socket);

  socket.on("data", (data) => {
    // parse the message

    const parsedMessage = parseMessage(data);

    if (!parsedMessage) {
      console.error("Invalid message format.");
      return;
    }

    handleMessage(socket, parsedMessage);
  });

  socket.on("end", () => {
    console.log("Client disconnected");
  });

  socket.on("error", (err) => {
    console.log(`Socket Error: ${err}`);
  });
});

server.listen(8080, () => {
  console.log("Server started on port 8080");
});

// Handle server errors
server.on("error", (err) => {
  console.log(`Server error: ${err}`);
});

function handleMessage(socket, parsedMessage) {
  // Handle the message based on the type
  switch (parsedMessage.command) {
    case "AUTH":
      handleAuth(socket, parsedMessage);
      break;
    // case "JOIN":
    //   handleJoin(socket, parsedMessage);
    //   break;
    // case "SEND":
    //   handleSend(socket, parsedMessage);
    //   break;
    // default:
    //   console.error("Unknown command: ", parsedMessage.type);
  }
}

function handleAuth(socket, parsedMessage) {
  // Handle the authentication request
  // Check if the user is already authenticated

  const user = parsedMessage.headers["User"];
  const token = parsedMessage.headers["Token"];

  if (!user || !token) {
    console.error("Invalid authentication request.");
    return;
  }

  // Check if the user is already authenticated
  //todo: move secret to somewhere in db, don't hardcoded
  if (token === "secret123") {
    socket.authenticated = true;
    socket.username = user;

    socket.write(
      formatResponse(
        "OK",
        "AUTH",
        {
          "Content-Length": 0,
        },
        ""
      )
    );
  } else {
    socket.write("Authentication failed\n");
    console.log(`${socket.username} failed to authenticate.`);
  }
}

function formatResponse(command, responseFor, headers, body, user) {
  /**
     *  CHAT/1.0 OK
        Response-For: AUTH/SEND/JOIN/LEAVE
        User: Alice
        Content-Length: 0
     */

  const startLine = `CHAT/1.0 ${command}`;

  const headerLines = [];
  if (responseFor) {
    headerLines.push(`Response-For: ${responseFor}`);
  }
  if (user) {
    headerLines.push(`User: ${user}`);
  }
  if (headers) {
    for (const key in headers) {
      const header = `${key}:${headers[key]}`;
      headerLines.push(header);
    }
  }

  return `${startLine}\r\n${headerLines.join("\r\n")}\r\n\r\n${body}`;
}

function parseMessage(message) {
  /**
 *  CHAT/1.0 AUTH
    User: alice
    Token: secret123
    Content-Length: 0

    body
 */
  //   console.log("Message: ", message);

  const parts = message.split("\r\n\r\n");

  if (parts.length < 2) return null; // Missing body

  //   console.log("Parts: ", parts);

  const headerPart = parts[0];

  const body = parts[1];

  const headerLines = headerPart.split("\r\n");

  if (headerLines.length === 0) return null;

  const firstLine = headerLines[0].split(" ");

  if (firstLine.length < 2) return null;

  const protocolVersion = firstLine[0];
  const command = firstLine[1];

  const headers = {};
  let contentLength = 0;

  for (let i = 1; i < headerLines.length; i++) {
    const line = headerLines[i];

    if (!line.includes(":")) continue;
    const [key, value] = line.split(":");

    headers[key.trim()] = value.trim();

    if (key.trim().toLowerCase() === "content-length") {
      contentLength = parseInt(value.trim(), 10);
    }
  }

  // Optional check
  if (body.length !== contentLength) {
    console.warn(
      `Warning: body content length ${body.length} does not match content length header.`
    );
  }

  return {
    protocolVersion,
    command,
    headers,
    body,
  };
}
