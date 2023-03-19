const Discord = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
exports.run = async (client, message, args) => {
let rolal = '971890698532044820';
if(!message.member.roles.cache.has('889628604605009940')) return
let member = message.mentions.members.first();
let yetkili = message.author.tag
member.roles.remove(rolal);
         
      const carrys = new Discord.MessageEmbed()
      .setTitle(`Başarıyla Giriş Permi Alındı ✅ `)
      .setColor("RANDOM")
      .addField('Permi Veren Yetkili :',  yetkili)
      .addField('Perm Verilen Kişi :',  member)
      .addField("Steam Link : ",  args[1])
      .addField("Hex : ",  args[2])
      message.channel.send(carrys); 
message.guild.channels.cache.get('967890968844066876').send(new Discord.MessageEmbed()
      .setTitle(`Başarıyla Giriş Permi Alındı ✅ `)
      .setColor("RANDOM")
      .addField('Permi Veren Yetkili :',  yetkili)
      .addField('Perm Verilen Kişi :',  member)
      .addField("Steam Link : ",  args[1])
      .addField("Hex : ",  args[2])
                                            )

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
} 

exports.help = {
  name: 'g-al'
};