console.log(`Starting Bot...`);

const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./botconfig.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(token);

console.log(`Logging Into Misto#8520's Private Server`);