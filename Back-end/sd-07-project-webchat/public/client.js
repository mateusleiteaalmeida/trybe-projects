const client = window.io();

const messagesList = document.querySelector('#messagesList');
const usersList = document.querySelector('#usersList');
const messageButton = document.querySelector('#messageButton');
const messageInput = document.querySelector('#messageInput');
const nicknameButton = document.querySelector('#nicknameButton');
const nicknameInput = document.querySelector('#nicknameInput');
const currentUser = document.querySelector('#currentUser');

const createMessage = (message) => {
  const li = document.createElement('li');
  li.setAttribute('data-testid', 'message');
  li.innerText = message;
  messagesList.appendChild(li);
};

messageButton.addEventListener('click', (e) => {
  e.preventDefault();
  const messageValue = messageInput.value;
  client.emit('message', { chatMessage: messageValue });
  messageInput.value = '';
});

client.on('message', (message) => createMessage(message));

const showClientsList = (listUsers) => {
  document.querySelectorAll('.userLi').forEach((user) => user.remove());
  listUsers.filter((user) => user !== currentUser.innerText).forEach((user) => {
    const li = document.createElement('li');
    li.setAttribute('data-testid', 'online-user');
    li.className = 'userLi';
    li.innerText = user;
    usersList.appendChild(li);
  });
};

client.on('clientsList', (clientsList) => showClientsList(clientsList));

client.on('currentUser', (name) => { currentUser.innerText = name; });

client.on('updateMessages', (messages) => messages.forEach((message) => createMessage(message)));

nicknameButton.addEventListener('click', (e) => {
  e.preventDefault();
  const textNickname = nicknameInput.value;
  currentUser.innerText = textNickname;
  client.emit('nickname', textNickname);
  nicknameInput.value = '';
});
