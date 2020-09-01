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

//Cycles through function to test build was successful and then shuts down bot (so we don't rack up 1 million github minutes used)
client.on('ready', () => {
    const channel = client.channels.cache.get('process.env.DISCORD_BUILD_CHANNEL')
    .then(console.log("I AM ALIVE! NOW TESTING TO SEE IF I CAN SEND A SUCCESSFUL MESSAGE!"))
    .then(channel.send('Build Successful!'))
    .then(client.destroy());
});
