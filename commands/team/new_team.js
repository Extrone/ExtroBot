const commando = require('discord.js-commando');

class NewTeamCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'new_team',
            group: 'team',
            memberName: 'new_team',
            description: 'Creats a new team.'
        });
    }

    async run(message, args)
    {
        currentTeamMembers = []
        message.reply("The current team has been Reset!");
    }
}

module.exports = NewTeamCommand;