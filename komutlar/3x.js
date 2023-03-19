const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
exports.run = async (client, message, args) => {
let rolal = '965310306907742288';
let rolal2 = '965310412205740043';
let rol1 = '965311030127378472';
if(!message.member.roles.cache.has('889628604605009940')) return
let member = message.mentions.members.first();
let yetkili = message.author.tag
member.roles.add(rol1);
member.roles.remove(rolal);
member.roles.remove(rolal2);         

      const carrys = new Discord.MessageEmbed()
      .setTitle(`Başarıyla Uyarı 3x Verildi ✅ `)
      .setColor("RANDOM")
      .addField('Uyarıyı Veren Yetkili :',  yetkili)
      .addField('Uyarı Verilen Kişi :',  member)
      .addField("Sebep : ",  args[1])
      .addField("Not : ",  args[2])
      message.channel.send(carrys); 
message.guild.channels.cache.get('967890968844066876').send(new Discord.MessageEmbed()
      .setTitle(`Başarıyla Uyarı 3x Verildi ✅ `)
      .setColor("RANDOM")
      .addField('Uyarıyı Veren Yetkili :',  yetkili)
      .addField('Uyarı Verilen Kişi :',  member)
      .addField("Sebep : ",  args[1])
      .addField("Not : ",  args[2])
                                            )

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
} 

exports.help = {
  name: '3x'
};