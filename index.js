// Import the discord.js module
const Discord = require('discord.js');
const fs = require("fs");
const {
    prefix,
    token,
    ServerIP
} = require('./config/config.json');


//Start the Client
const { client } = require('discord.js')
const { token } = require('./config/config.json')
const client = new Discord.Client();