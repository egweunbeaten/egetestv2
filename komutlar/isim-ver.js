const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
if(!message.member.roles.cache.has('889628604605009940')) return
const kufur= ["oç", "yarrak","orospu","Orospu","Amk","amk","sik","sex","mal","Amcık","amcık",];
  let isim = args.slice(1).join(' ');
  let kullanici = message.mentions.users.first();
  if(!kullanici) return message.reply(`⚠️ Lütfen bir kullanıcı giriniz! \nDoğru Kullanım; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} yeni isim\``)
  if(!isim) return message.reply(`⚠️ Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} yeni isim\``)
  if(isim.length > 32) return message.reply(`⚠️ Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz!`)
  if(kufur.some(word => message.content.includes(word)))  return message.channel.send("yasak güzelim yasak") 
          


  message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
  message.channel.send(`✅ Başarılı bir şekilde \`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi.`)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir'],
    permLevel: 0
}

exports.help = {
    name: 'isimver',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı kullanıcı adı'
}