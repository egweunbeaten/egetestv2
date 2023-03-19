const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.delete() 
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
     .setImage('https://cdn.discordapp.com/attachments/498487265924874240/716094122242342972/borp_vsiz_1.png')
    .setDescription(`**BORP** Güncel **RES** saatlerimiz \n\n12:00-19:00 \n\n**Not** Bu saatler içerisinde planlı bakımlar dahil değildir.`);
    message.channel.send(ozelmesajkontrol) }
  return message.channel.send("");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ressaatleri', 'res-saatleri'],
  permLevel: 2
};

exports.help = {
  name: 'res',
  description: 'r.',
  usage: 'res-saatleri'
};