const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

message.channel.send(`Kanalların Kilidi Açıldı.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
message.guild.channels.cache.map(channel => channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Açan '+message.author.tag));
client.channels.cache.get("900836399744450601").send(new Discord.MessageEmbed()
.setColor('GREEN')
.setTitle(' Kanalların Kilidi Açık.')
.setDescription(`Kanalların Kilidi Açıldı`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'unlock'
};