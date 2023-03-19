const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.delete() 
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`Gerekli Yetkililere Bildirildi. Beklemede kalınız...`);
    message.channel.send(ozelmesajkontrol) }
  return message.channel.send("<@&889628604605009940>");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'r.',
  usage: 'destek'
};