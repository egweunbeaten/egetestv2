const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
exports.run = async (client, message, args) => {
let rol1 = '965310306907742288';
if(!message.member.roles.cache.has('889628604605009940')) return
let member = message.mentions.members.first();
let yetkili = message.author.tag
member.roles.add(rol1);

         
      const carrys = new Discord.MessageEmbed()
      .setTitle(`Başarıyla Uyarı 1x Verildi ✅ `)
      .setColor("RANDOM")
      .addField('Uyarıyı Veren Yetkili :',  yetkili)
      .addField('Uyarı Verilen Kişi :',  member)
      .addField("Sebep : ",  args[1])
      .addField("Not : ",  args[2])
      message.channel.send(carrys); 
message.guild.channels.cache.get('967890968844066876').send(new Discord.MessageEmbed()
      .setTitle(`Başarıyla Uyarı 1x Verildi ✅ `)
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
  name: '1x'
};