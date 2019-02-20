const commando = require('discord.js-commando');
const Discord = require('discord.js')

class TeamMembersCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'team_members',
            group: 'team',
            memberName: 'team_members',
            description: 'Displays the members in the current team.'
        });
    }

    async run(message, args)
    {
        var teamInfo = new Discord.RichEmbed()
        .setTitle("Current Team Members")
        for(var i = 0; i < currentTeamMembers.length; i++)
        {
        teamInfo.addField("Member " + (i + 1), currentTeamMembers[i].username, true)
        }
        message.channel.send(teamInfo);
    }
}

module.exports = TeamMembersCommand;