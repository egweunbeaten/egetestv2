const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
exports.run = async (client, message, args) => {
let rolal = '965310306907742288';
let rolal2 = '965310412205740043';
let rolal3 = '965311030127378472';
let rolal4 = '971890698532044820';
let rol1 = '889628604143656988';
if(!message.member.roles.cache.has('889628604605009940')) return
let member = message.mentions.members.first();
let yetkili = message.author.tag
member.roles.add(rol1);
member.roles.remove(rolal);
member.roles.remove(rolal2);
member.roles.remove(rolal3);
member.roles.remove(rolal4);
         
      const carrys = new Discord.MessageEmbed()
      .setTitle(`Başarıyla Ceza Verildi ✅ `)
      .setColor("RANDOM")
      .addField('Cezayı Veren Yetkili :',  yetkili)
      .addField('Ceza Verilen Kişi :',  member)
      .addField("Sebep : ",  args[1])
      .addField("Not : ",  args[2])
      message.channel.send(carrys); 
message.guild.channels.cache.get('967890968844066876').send(new Discord.MessageEmbed()
      .setTitle(`Başarıyla Ceza Verildi ✅ `)
      .setColor("RANDOM")
      .addField('Cezayı Veren Yetkili :',  yetkili)
      .addField('Ceza Verilen Kişi :',  member)
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
  name: 'c'
};