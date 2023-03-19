const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  const ayarlar = require("../ayarlar.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;
    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(` **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
 if (isNaN(user)) return message.channel.send('**Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
  if (reason.length < 1) return message.channel.send('⛔️ **Lütfen Sebep Giriniz**');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("#ffd100")
  .addField('⛔️ İşlem', 'Ban Kaldırma')
  .addField('⛔️ Banı Açılan Üye', `(${user})`)
  .addField('⛔️ Banı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('⛔️ Banı Açma Sebebi', "```" + reason + "```")
  message.channel.send(embed);
  message.guild.members.unban(user);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
}
exports.help = {
  name: 'unban',
  description: 'Herhangi bir kullanıcının IDsini belirterek yasapı kaldırabilirsiniz',
  usage: 'unban '
}