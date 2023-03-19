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
    //  .setImage('https://cdn.discordapp.com/attachments/535757875960872960/967893030545788998/bakimht.png')
    .setDescription(`Sunucumuz şuanda **bakımda!**`);
    message.channel.send(ozelmesajkontrol) }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bakım',
  description: 'Yapimcimasi Gosterir.',
  usage: 'yapimsacim'
};
