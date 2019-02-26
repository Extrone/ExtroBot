const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'simple',
            memberName: 'kick',
            description: 'Kicks the mentioned member.'
        });
    }

    async run(message, args)
    {
        if(!message.guild) return;

        const user = message.mentions.users.first();
        if (user) {
          const member = message.guild.member(user);
          if (member) {
            member.kick('Optional reason that will display in the audit logs').then(() => {
              message.reply(`Successfully kicked ${user.tag}`);
            }).catch(err => {
              message.reply('I was unable to kick the member');
              console.error(err);
            });
          } else {
            message.reply('That user isn\'t in this guild!');
          }
        } else {
          message.reply('You didn\'t mention the user to kick!');
        }
    }
}

module.exports = KickCommand;