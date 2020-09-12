// Import the discord.js module
const Discord = require('discord.js');

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

    //What environment are we running in?
    console.log(`Currently running in `, current_environment, ` mode.`);
    if (current_environment === 'PRODUCTION') {
        console.log(`Ready for commands`);
    }
    else if (current_environment === 'DEVELOPMENT') {
        console.log(`Ready for commands`);
    }
    else {
        if (current_environment === 'BUILD') {
            console.log(`Killing client process. Running in BUILD mode as per CURRENT_ENVIRONMENT in .env`);
            //const channel = client.channels.cache.get(build_channel_id); // Disabled as we don't want to spam channels yet.
            console.log(`Build successful for node`, process.version);
            client.destroy();
        }
        else {
            console.log(`Killing client process. You haven't defined a state for CURRENT_ENVIRONMENT in .env`);
            client.destroy();
        }
    }
});