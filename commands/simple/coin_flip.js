const commando = require('discord.js-commando');
const Discord = require('discord.js');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'Flips a coin, landing on either Heads or Tails.'
        });
    }

    async run(message, args)
    {
        var coinFlippingEmbed = new Discord.RichEmbed()
            .setTitle("Flipping Coin")
            .setThumbnail('https://media.giphy.com/media/9rrmiU1lM62cpZkpOg/giphy.gif')
            .setColor('ffbb00')

            message.channel.send(coinFlippingEmbed)
            .then(msg => [
                msg.delete(3000)
            ]);

        setTimeout(function()
        {
            var chance = Math.floor(Math.random() * 2);
            if(chance == 0)
            {
                message.channel.sendMessage({files: [__dirname + '/CoinPics/Heads.png']})
            }
            else
            {
                message.channel.sendMessage({files: [__dirname + '/CoinPics/Tails.png']})
            }
        }, 3500)
    }
}

module.exports = CoinFlipCommand;