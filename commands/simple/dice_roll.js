const commando = require('discord.js-commando');

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
        var diceRoll = Math.floor(Math.random() * 6 + 1);

        message.channel.sendMessage({files: [__dirname + "/DicePics/Dice" + diceRoll + ".png"]});
    }
}

module.exports = DiceRollCommand;