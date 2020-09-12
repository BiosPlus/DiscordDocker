// Import the discord.js module
const Discord = require('discord.js');
//const { config } = require('dotenv/types');

//Environment variable reading
require('dotenv').config();
const { discord_command_prefix,
    discord_auth_token,
    build_channel_id,
    current_environment } = require('./config/config.js');

//Create a client instance
const client = new Discord.Client();

//Client login
client.login(discord_auth_token);

//Runs when the client instance is booted depending on the CURRENT_ENVIRONMENT variable.
client.once('ready', () => {
    console.log(client.user.username + ` is live.`);
    console.log(discord_command_prefix);

    //What environment are we running in?
    console.log(`Currently running in `, current_environment, ` mode.`);
    if (current_environment === 'PRODUCTION') {
        console.log(`Ready for Commands`);
    }
    else if (current_environment === 'DEVELOPMENT') {
        console.log(`Ready for commands`);
    }
    else {
        console.log(`Killing client process. Either in BUILD mode or you have not defined CURRENT_ENVIRONMENT in .env`);
        if (current_environment === 'BUILD') {
            const channel = client.channels.cache.get(build_channel_id);
            console.log(`Build successful for node`, process.version);
            client.destroy();
        }
        else {
        }
    }
});