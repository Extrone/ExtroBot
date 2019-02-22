const commando = require('discord.js-commando');
const Discord = require('discord.js');

class YearProgressCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'yearprogress',
            group: 'simple',
            memberName: 'yearprogress',
            description: 'Displays the progress of the current year.'
        });
    }

    async run(message, args)
    {
        var currentDate = new Date();
        var newYear = new Date("2019-01-01T00:00:00");
        var progress = Math.round(((currentDate-newYear)/31557600000)*100);
        var year = currentDate.getFullYear();
        var thumbnailURL = 'https://cdn2.iconfinder.com/data/icons/education-solid-icons-volume-2/64/064-512.png';

        var yearProgressEmbed = new Discord.RichEmbed()
            .setTitle("Year Progress")
            .addField(progress + '%', year + " is " + progress + "% complete.")
            .setColor('0066ff')
            .setFooter(currentDate.toDateString() + ' ' + currentDate.toTimeString())

        message.channel.sendMessage(yearProgressEmbed);
    }
}

module.exports = YearProgressCommand;