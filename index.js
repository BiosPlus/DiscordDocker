// Import the discord.js module
const Discord = require('discord.js');
const fs = require("fs");
const {
    prefix,
    token,
    ServerIP
} = require('./config/config.json');


//Start the Client
const client = new Discord.Client();



//lifecheck
client.on('ready', async () => {
    client.user.setActivity("Prefix: " + prefix, {
        type: "PLAYING"
    });
    console.log(client.user.username + ` is live.`);
});
//bot token
client.login(token);
