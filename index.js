const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = requipe('./index.json');
const token = process.env.token;
const prefix = (cfg.prefix);
bot.on('ready', function () {
    console.log("Ok.")
    bot.user.setActivity('Regarder Nathalie').catch(console.error)
});



bot.login(token);
