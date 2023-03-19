const Discord = require('discord.js');
const fs = require('fs');
const data = require('quick.db');


exports.run = (client, message, args) => {
  let banlog = client.channels.cache.get("907309540129800252")
if(!message.member.roles.cache.has('784443431198916658')) return
if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('Uyarı', '`ban` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild
  let yetkili = message.author.tag
  let reason = args.slice(1).join(' ');
  let kisi = message.mentions.users.first();
  
  if(!reason) return message.channel.send("Lütfen Sebebini Yazınız")

  if (message.mentions.users.size < 1) return message.channel.send(`Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`).catch(console.error);

  if (!message.guild.member(kisi).bannable) return message.channel.send(`❌ Belirttiğiniz kişinin Yetkisi Benden Daha Üstün!`);
  message.guild.member(kisi).ban();
 const embed = new Discord.MessageEmbed()
  .setColor('BLACK')
  .addField("» **Yetkili**", yetkili)
   .addField("» **Kullanıcı**", kisi)
  .addField("» **Sebebi**", reason)
 .setColor("BLUE")
 .setImage("https://media.giphy.com/media/dXQuNWg8TQZ3Gp1UXP/source.gif")
 .setTimestamp()
message.channel.send(embed)
  banlog.send(embed)
  
  
  
      
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban'],
  permLevel: 2,
    kategori: "moderasyon",
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',
 
};