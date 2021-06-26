const express = require('express');

const app = express();
const http = require('http').createServer(app);
const moment = require('moment');
const faker = require('faker');

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  } });

const messagesModel = require('./models/messagesModel');

const PORT = 3000;

let clients = [];

const updateMessages = async () => {
  const allMessages = await messagesModel.getAllMessages();
  const formatedMessages = allMessages.map((message) => 
    `${message.date} - ${message.nickname}: ${message.chatMessage}`);
  io.emit('updateMessages', formatedMessages);
};

const createMessage = async (nickname, chatMessage) => {
  const datetimeValue = moment().format('DD-MM-yyyy HH:mm:ss');
  await messagesModel.createMessage(datetimeValue, nickname, chatMessage);
  io.emit('message', `${datetimeValue} - ${nickname}: ${chatMessage}`);
};

io.on('connection', async (socket) => {
  let newClient = faker.internet.password(16);
  clients.push(newClient);

  socket.on('message', async ({ chatMessage, nickname = newClient }) => {
    await createMessage(nickname, chatMessage);
  });

  socket.emit('currentUser', newClient);

  io.emit('clientsList', clients);
  
  await updateMessages();

  socket.on('nickname', (name) => {
    clients[clients.indexOf(newClient)] = name;
    newClient = name;
    io.emit('clientsList', clients);
  });

  socket.on('disconnect', () => {
    clients = clients.filter((user) => user !== newClient);
    io.emit('clientsList', clients.filter((user) => user !== newClient));
  });
});

app.use(express.static(`${__dirname}/public`));

http.listen(PORT, () => console.log('Servidor ouvindo na porta 3000'));
