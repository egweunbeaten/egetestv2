const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
exports.run = async (client, message, args) => {
let rolal = '929473865564979290';
let rolal2 = '889628604449816578';
let rol2 = '971890582022651964';
if(!message.member.roles.cache.has('889628604605009940')) return
let member = message.mentions.members.first();
let yetkili = message.author.tag
member.roles.add(rol2);
member.roles.remove(rolal);
member.roles.remove(rolal2);
         
      const carrys = new Discord.MessageEmbed()
      .setTitle(`Başarıyla Kayıt Edildi ✅ `)
      .setColor("RANDOM")
      .addField('Kaydı Yapan Yetkili :',  yetkili)
      .addField('Kaydı Yapılan Kişi :',  member)
      .addField("Steam Link : ",  args[1])
      .addField("Hex İd : ",  args[2])
      message.channel.send(carrys); 
message.guild.channels.cache.get('890297905657827408').send(new Discord.MessageEmbed()
      .setTitle(`Başarıyla Kayıt Edildi ✅ `)
      .setColor("RANDOM")
      .addField('Kaydı Yapan Yetkili :',  yetkili)
      .addField('Kaydı Yapılan Kişi :',  member)
      .addField("Steam Link : ",  args[1])
      .addField("Hex İd : ",  args[2])
                                            )

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
} 

exports.help = {
  name: 'k'
};