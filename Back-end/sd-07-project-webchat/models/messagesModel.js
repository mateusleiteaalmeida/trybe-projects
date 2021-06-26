const connection = require('./connection');

const createMessage = async (date, nickname, chatMessage) => {
  const createdMessage = await connection()
  .then((db) => db.collection('messages').insertOne({ date, nickname, chatMessage }));
  return createdMessage.ops[0];
};

const getAllMessages = async () => {
  const messages = await connection()
    .then((db) => db.collection('messages').find().toArray());
  return messages;
};

module.exports = {
  createMessage,
  getAllMessages,
};