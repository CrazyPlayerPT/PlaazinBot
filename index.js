const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logado ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.startsWith('ping')) {
    msg.reply(`Ping: ${client.ping}`);
  }
});

client.login('token');
