// Import the discord.js module
const Discord = require('discord.js');

//Environment variable reading
require('dotenv').config();

/*
const {
    prefix,
    token
} = require('./config/config.json');
*/

//Start the Client
const client = new Discord.Client();



//lifecheck
client.on('ready', async () => {
    client.user.setActivity("Prefix: " + process.env.DISCORD_COMMAND_PREFIX, {
        type: "PLAYING"
    });
    console.log(client.user.username + ` is live.`);
});

//Client live
client.login(process.env.DISCORD_AUTH_TOKEN);
