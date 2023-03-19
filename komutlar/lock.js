const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;



let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};
let reasonn;
if(!reason) reasonn = '. Nedeninii yAZ.';
if(reason) reasonn = ` ${reason} neden.`;
message.channel.send(`Bütün Kanallar **KİTLENDİ**`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
message.guild.channels.cache.map(channel => channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Kilitlendi '+message.author.tag));
client.channels.cache.get("900836399744450601").send(new Discord.MessageEmbed()
.setColor('RED')
.setTitle(' Kanallar kitlendi.')
.setDescription(`Kanallar `+reason+` Nedeniyle Kilitlendi`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'lock'
};