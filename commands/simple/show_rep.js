const commando = require('discord.js-commando');
const reputation = require("../../reputation.json");
const Discord = require('discord.js');

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
        var tierURL = '';
        var tierColor = 'cccccc';
        var tierName = 'Common';
        var tierDifference = '';
        var nextTierURL = 'https://media.giphy.com/media/bLcUXdVYNDQrbQxywX/giphy.gif'

        if(targetRep >= commonRange && targetRep < unCommonRange)
        {
            tierURL = 'https://media.giphy.com/media/1APjr0YOlz3ZfZBU5X/giphy.gif';
            tierColor = 'cccccc';
            tierName = 'Common';
            tierDifference = unCommonRange - targetRep + ' more rep need to advance to Un-Common Tier.';
            nextTierURL = 'https://media.giphy.com/media/bLcUXdVYNDQrbQxywX/giphy.gif'
        }
        else if(targetRep >= unCommonRange && targetRep < rareRange)
        {
            tierURL = 'https://media.giphy.com/media/bLcUXdVYNDQrbQxywX/giphy.gif';
            tierColor = '11ff11';
            tierName = 'UnCommon';
            tierDifference = rareRange - targetRep + ' more rep need to advance to Rare Tier.';
            nextTierURL = 'https://media.giphy.com/media/vwjGwKxOn9YqmAcV26/giphy.gif'

        }
        else if(targetRep >= rareRange && targetRep < epicRange)
        {
            tierURL = 'https://media.giphy.com/media/vwjGwKxOn9YqmAcV26/giphy.gif';
            tierColor = '1111ff';
            tierName = 'Rare';
            tierDifference = epicRange - targetRep + ' more rep need to advance to Epic Tier.';
            nextTierURL = 'https://media.giphy.com/media/4N8Yg0TuzN9vO982po/giphy.gif'

        }
        else if(targetRep >= epicRange && targetRep < legendaryRange)
        {
            tierURL = 'https://media.giphy.com/media/4N8Yg0TuzN9vO982po/giphy.gif';
            tierColor = 'bb11ff';
            tierName = 'Epic';
            tierDifference = legendaryRange - targetRep + ' more rep need to advance to Legendary Tier.';
            nextTierURL = 'https://media.giphy.com/media/1Bg7F8cpvaqXpKDIXe/giphy.gif'

        }
        else if(targetRep >= legendaryRange)
        {
            tierURL = 'https://media.giphy.com/media/1Bg7F8cpvaqXpKDIXe/giphy.gif';
            tierColor = 'ffff11';
            tierName = 'Legendary';
            tierDifference = 'You are at the most Advanced Tier :D';
            nextTierURL = 'https://media.giphy.com/media/1Bg7F8cpvaqXpKDIXe/giphy.gif'
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
            .setTitle(targetUser.user.username)
            .addField("Tier", tierName, false)
            .addField("Reputation", targetRep, false)
            .setThumbnail(tierURL)
            .setColor(tierColor)
            .setFooter(tierDifference, nextTierURL)

        message.channel.send(repEmbed);
    }
}

module.exports = ShowRepCommand;