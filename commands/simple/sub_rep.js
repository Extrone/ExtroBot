const commando = require('discord.js-commando');
const reputation = require("../../reputation.json");
const Discord = require('discord.js');
const fs = require("fs");

class SubtractRepCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'subrep',
            group: 'simple',
            memberName: 'subrep',
            description: 'Subtracts reputation to the user.'
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
        reputation[targetUser.id].rep = reputation[targetUser.id].rep - 1;
        fs.writeFile("reputation.json", JSON.stringify(reputation), (err) =>{
            if(err){
                console.log(err);
            }
        });

        let repEmbed = new Discord.RichEmbed()
            .setTitle(targetUser.user.username + " got -1 Reputation")
            .addField("Reputation", (reputation[targetUser.id].rep), false)
            .setThumbnail("https://media.giphy.com/media/4N76WeQ9uy0MUKGqRt/giphy.gif")
            .setColor("ff1111")

        message.channel.send(repEmbed);
    }
}

module.exports = SubtractRepCommand;