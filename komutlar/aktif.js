const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.delete() 
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Yetersiz Yetki!") 
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    // .setImage('https://cdn-longterm.mee6.xyz/plugins/commands/images/889628604143656981/6274881d2c4f8ce5f65b79f71be144a9d60c5e9f8deac286363cf1ce3851abb9.png')
    .setDescription(`**Sunucu Aktiftir** Giriş Yapabilirsiniz ! \n\n**Server IP** : 188.255.200.31 \n\n**TS IP** : 188.255.200.32`);
    message.channel.send(ozelmesajkontrol) }
  return message.channel.send("@everyone");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'aktif',
  description: 'r.',
  usage: 'yapimscim'
};