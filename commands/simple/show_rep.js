const commando = require('discord.js-commando');
const reputation = require("../../reputation.json");
const Discord = require('discord.js');
const fs = require("fs");

class ShowRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'showrep',
            group: 'simple',
            memberName: 'showrep',
            description: 'Shows the reputation of the user.'
        });
    }

    async run(message, args)
    {
        let targetUser = message.guild.member(message.mentions.users.first());
        if(!targetUser){
            message.channel.send("Sorry, I couldn't find that user.");
            return;
        }
        if(!reputation[targetUser.id]){
            reputation[targetUser.id] = {
                rep: 0
            };
        }
        let repEmbed = new Discord.RichEmbed()
            .setTitle(targetUser.user.username + "'s Reputation")
            .addField("Reputation", (reputation[targetUser.id].rep), false)
            .setThumbnail("https://media.giphy.com/media/2ux0CwMB8feG6c4u4a/giphy.gif")
            .setColor("ffbb00")

        message.channel.send(repEmbed);
    }
}

module.exports = ShowRepCommand;