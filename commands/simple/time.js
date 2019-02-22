const commando = require('discord.js-commando');

class CurrentTimeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'time',
            group: 'simple',
            memberName: 'time',
            description: 'Tells the current time.'
        });
    }

    async run(message, args)
    {
        var d = new Date();
        message.channel.sendMessage(d.toTimeString());
    }
}

module.exports = CurrentTimeCommand;