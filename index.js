const Commando = require('discord.js-commando');
const Discord = require('discord.js')
const bot = new Commando.Client();
const Token = 'NTQ2NjQ0NzY0MzA1NjUzNzYw.D0rcnQ.md7JhNb7_0thpqA-Yy9FI7PH6l8';

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Team');
bot.registry.registerDefaults();    
bot.registry.registerCommandsIn(__dirname + '/commands');

global.currentTeamMembers = [];
global.servers ={};

bot.on('ready', function()
{
    console.log("Ready");
})

bot.on('message', function(message)
{
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ' ,how are you');
    }
    else if(message.content == 'WTF')
    {
        message.delete(2000);
        message.channel.send("you have been warned " + message.author);
    }
});

bot.on('guildMemberAdd', member => 
{
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    channel.send("Welcome to the " + member.guild + " Server, " + member);
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole)
        .then(console.log)
        .catch(console.error);
})

bot.login(Token);