const commando = require('discord.js-commando');

class FunMirrorCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'mirrorme',
            group: 'simple',
            memberName: 'mirrorme',
            description: 'Looks at your reflection in a mirror!'
        });
    }

    async run(message, args)
    {
        message.reply(message.author.avatarURL);
    }
}

module.exports = FunMirrorCommand;