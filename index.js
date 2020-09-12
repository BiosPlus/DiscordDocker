// Import the discord.js module
const Discord = require('discord.js');

//Environment variable reading
require('dotenv').config();

//Create a client instance
const client = new Discord.Client();
const token = process.env.DISCORD_AUTH_TOKEN;

//Client login
client.login(token);

//Runs when the client instance is booted depending on the CURRENT_ENVIRONMENT variable.
client.once('ready', () => {
    let enviro = process.env.CURRENT_ENVIRONMENT;
    console.log(client.user.username + ` is live.`);

    //What environment are we running in?
    console.log(`Currently running in `, enviro, ` mode.`);
    if (enviro === 'PRODUCTION') {
        console.log(`Ready for Commands`);
    }
    else if (enviro === 'DEVELOPMENT') {
        console.log(`Ready for commands`);
    }
    else {
        console.log(`Killing client process. Either in BUILD mode or you have not defined CURRENT_ENVIRONMENT`);
        if (enviro === 'BUILD') {
            let build_channel_id = process.env.DISCORD_BUILD_CHANNEL;
            const channel = client.channels.cache.get(build_channel_id);
            console.log(`Build successful.`);
            client.destroy();
        }
        else {
        }
    }
});