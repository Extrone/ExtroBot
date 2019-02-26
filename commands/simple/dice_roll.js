const commando = require('discord.js-commando');
const Discord = require('discord.js');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'Rolls a six sided Dice.'
        });
    }

    async run(message, args)
    {
        var diceRollingEmbed = new Discord.RichEmbed()
            .setTitle('Rolling Dice')
            .setThumbnail('https://media.giphy.com/media/u45fMZrUM3hf3kuc4O/giphy.gif')
            .setColor('ffffff')
            
        message.channel.send(diceRollingEmbed)
        .then(msg => [
            msg.delete(3000)
        ]);

        setTimeout(function()
        {
            var diceRoll = Math.floor(Math.random() * 6 + 1);
            message.channel.sendMessage({files: [__dirname + "/DicePics/Dice" + diceRoll + ".png"]});
        }, 3500)
    }
}

module.exports = DiceRollCommand;