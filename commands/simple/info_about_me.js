const commando = require('discord.js-commando');
const Discord = require('discord.js');

class InfoAboutMeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Learn a little more about me!'
        });
    }

    async run(message, args)
    {
        var myInfo = new Discord.RichEmbed()
            .setTitle("All About Me!")
            .addField("About Me", "Hello, My name is Arjun", true)
            .addField("Side Text", "you reading this?", true)
            .addField("Somewhere else Text", "I dunno what to type anymore")
            .setColor('ffff00')
            .setThumbnail(message.author.avatarURL)
            .setURL("https://www.youtube.com/channel/UCqRWVWqOn9jfSmgXP1qrC9w")
            .setFooter("Thanks for reading, I hope you learned a little about me :D")
        
        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoAboutMeCommand;