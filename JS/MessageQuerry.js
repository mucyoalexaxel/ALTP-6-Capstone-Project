// Display Message Querries
const localStorageData = localStorage.getItem("messages");
const messages = JSON.parse(localStorageData);

const nameId = document.getElementById('name');
const emailId = document.getElementById('email');
const messageId = document.getElementById('message');

nameId.innerText = messages[0].name;
emailId.innerText = messages[0].email;
messageId.innerText = messages[0].message;