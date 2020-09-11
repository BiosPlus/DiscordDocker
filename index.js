// Import the discord.js module
const Discord = require('discord.js');

//Environment variable reading
require('dotenv').config();

//Create a client instance
const client = new Discord.Client();

//Runs when the client instance is booted depending on the CURRENT_ENVIRONMENT variable.
client.on('ready', async () => {
    let enviro = process.env.CURRENT_ENVIRONMENT;

    //Client login
    client.login(process.env.DISCORD_AUTH_TOKEN);
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
            const channel = client.channels.cache.get(build_channel_id)
            channel.send(`Build successful.`);
        }
        else {
        }
        client.destroy();
    }
});


/*
//Cycles through function to test build was successful and then shuts down bot (so we don't rack up 1 million github minutes used)
client.on('ready', () => {

    const channel = client.channels.cache.get('process.env.DISCORD_BUILD_CHANNEL')
    .then(console.log("I AM ALIVE! NOW TESTING TO SEE IF I CAN SEND A SUCCESSFUL MESSAGE!"))
    .then(channel.send('Build Successful!'))
    .then(client.destroy());
});
*/