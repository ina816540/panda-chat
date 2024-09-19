// server.js

const http = require('http');
const WebSocket = require('ws');

const server = http.createServer();
const wss = new WebSocket.Server({ server });

server.listen(3000, () => {
  console.log('Servidor HTTP escuchando en http://localhost:3000');
});

wss.on('connection', (ws) => {
  console.log('Nueva conexión WebSocket');

  ws.on('message', (message) => {
    const data = JSON.parse(message);
    console.log('Mensaje recibido:', data);

    // Envía el mensaje a todos los clientes conectados (excepto el que lo envió)
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });
});
