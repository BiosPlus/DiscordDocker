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