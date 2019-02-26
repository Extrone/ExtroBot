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
        var commonRange = 0;
        var unCommonRange = 50;
        var rareRange = 125;
        var epicRange = 250;
        var legendaryRange = 500;

        let targetUser = message.guild.member(message.mentions.users.first());
        var targetRep = reputation[targetUser.id].rep;
        var targetURL = '';
        var targetColor = 'cccccc';

        if(targetRep >= commonRange && targetRep < unCommonRange)
        {
            targetURL = 'https://media.giphy.com/media/1APjr0YOlz3ZfZBU5X/giphy.gif';
            targetColor = 'cccccc';
        }
        else if(targetRep >= unCommonRange && targetRep < rareRange)
        {
            targetURL = 'https://media.giphy.com/media/bLcUXdVYNDQrbQxywX/giphy.gif';
            targetColor = '11ff11';
        }
        else if(targetRep >= rareRange && targetRep < epicRange)
        {
            targetURL = 'https://media.giphy.com/media/vwjGwKxOn9YqmAcV26/giphy.gif';
            targetColor = '1111ff';
        }
        else if(targetRep >= epicRange && targetRep < legendaryRange)
        {
            targetURL = 'https://media.giphy.com/media/4N8Yg0TuzN9vO982po/giphy.gif';
            targetColor = 'bb11ff';
        }
        else if(targetRep >= legendaryRange)
        {
            targetURL = 'https://media.giphy.com/media/1Bg7F8cpvaqXpKDIXe/giphy.gif';
            targetColor = 'ffff11';
        }

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
            .setThumbnail(targetURL)
            .setColor(targetColor)

        message.channel.send(repEmbed);
    }
}

module.exports = ShowRepCommand;