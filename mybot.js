const Discord = require('discord.js');
const { stripIndents } = require("common-tags");
const bot = new Discord.Client();
const {Client, RichEmbed} = require('discord.js')
const ms = require("ms");
const ytdl = require("ytdl-core");
const fs = require("fs");
const superagent = require("superagent");
const antispam = require('discord-anti-spam')
const search = require("yt-search");
const token = 'NjY4MjA3MTg1MzA1Nzk2NjQx.XiYIng.reZDzjjGZr4GSNq_u1Qwnc_giOY';

var servers ={};

//LOGOVI

const PREFIX = '-'

var servers = {};

bot.on('ready', () =>{
  bot.user.setActivity('💙 ʙᴀʟᴋᴀɴ ᴅᴀʀᴋ 💙', { type: 'WATCHING'}).catch(console.error);
  console.log('On!')


    new antispam(bot, {
    warnBuffer: 3, 
    maxBuffer: 5,
    interval: 2000,
    warningMessage: "Prestani da spamujes!",
    banMessage: "Dobio si svoje :)",
    maxDuplicatesWarning: 7,
    maxDuplicatesBan: 10,
    deleteMessagesAfterBanForPastDays: 7,
    exemptRoles: ["Moderator"],
    exemptUsers: [" "]
  });

})


bot.on("guildMemberAdd", member => {

  const channel = member.guild.channels.find(channel => channel.name === "「👋」ᴅᴏʙʀᴏᴅᴏꜱᴀᴏ")
  if(!channel) return;
  channel.send
  (`╭────╬╬╬─:white_medium_small_square: ʙᴀʟᴋᴀɴ ᴅᴀʀᴋ ʀᴏʟᴇᴘʟᴀʏ:white_medium_small_square:─╬╬╬───╮
  ∥ 「:man_raising_hand:」 DobroDosao - **${member}**
  ∥ 「:crown:」 ᴠʟᴀꜱɴɪᴋ » **Luka** 
  ∥ 「:computer:」 ꜱᴋʀɪᴘᴛᴇʀ » **Luka**
  ∥ 「:crown:」 ɢʟᴀᴠɴɪ ᴀᴅᴍɪɴ » **Milox**
  ∥ 「 :crown:」ᴅɪꜱᴄᴏʀᴅ ᴀᴅᴍɪɴ » trajaa 
  ╬╬╬────╬╬╬─:white_medium_small_square:ʙᴀʟᴋᴀɴ ᴅᴀʀᴋ ʀᴏʟᴇᴘʟᴀʏ:white_medium_small_square:─╬╬╬───
  `)

  console.log('Clan ' + member.username + ' je usao na server')

  let role = member.guild.roles.find(role => role.name === "Civil");

  member.addRole(role)

});



bot.on("messageUpdate", async(oldMessage, newMessage) =>{
  if(oldMessage.content === newMessage.content){
    return;
  }
  bot.emit('checkMessage', msg);

      let logEmbed = new Discord.RichEmbed()
      .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
      .setThumbnail(oldMessage.author.avatarURL)
      .setColor("00FF45")
      .setDescription("Edit Poruka")
      .addField("Pre Edit-a", oldMessage.content, true)
      .addField("Posle Edit-a", newMessage.content, true)
      .setTimestamp()
      .setFooter("Edit poruka by Milox");

      let loggingChannel = newMessage.guild.channels.find(ch => ch.name === "「💢」ᴅɪꜱᴄᴏʀᴅ-ʟᴏɢᴏᴠɪ")
      if(!loggingChannel) return;

      loggingChannel.send(logEmbed);
})

bot.on("messageDelete", async message =>{

      let LoggingEmbed = new Discord.RichEmbed()
      .setTitle("Brisanje Poruka")
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .addField("Obrisano od strane:", message.author.tag)
      .addField("Izbrisano u:", message.channel)
      .addField("Izbrisano u:", message.createdAt)
      .setFooter("Brisanje poruka by Milox");

      let logChannel = message.guild.channels.find(c => c.name === "「💢」ᴅɪꜱᴄᴏʀᴅ-ʟᴏɢᴏᴠɪ")
      if(!logChannel) return;


      logChannel.send(LoggingEmbed)


})


bot.on('message', message=>{
  //if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(` Nema reklamiranja!`),message.delete(1);
  //if (message.content.includes("Discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /")) {
 // }
  if (message.content.includes("picka`, `Picka`, 'jebem', 'ti mater', 'pusi kurac', 'Pusi kurac', 'Pusi Kurac', 'pusi Kurac ")) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Nema Psovanja!!** "),message.delete(1);
  }

  if (message.content.startsWith("-ping")) {
    console.log("ping from " + message.author)
    message.channel.sendMessage("Ping Bota: " + bot.ping + "ms.")
  }
  if (message.content.startsWith("-changelog")) {
    console.log("changelog from " + message.author)
    message.channel.sendMessage("Hello! I (owner, <@609079446887989248>) will try to post any changes did to bot there.\n```\n04.01.2018\n- [BETA] message when bot joins a server\n03.01.2018\n- Changelog added\n- Some kind of smarter protection\n01.01.2018\n- Unpublic help\n28.12.2017\n- First version.\n```")
  }

  

  bot.on("guildCreate", guild => {
    console.log("Nowy serwer, " + guild.name)
    bot.user.setGame(bot.guilds.size + " servers / al!help")
  });
  
  bot.on("guildDelete", guild => {
    console.log("usuniety, " + guild.name)
    bot.user.setGame(bot.guilds.size + " servers / al!help")
  });
  

  let args = message.content.substring(PREFIX.length).split(" ");

  switch(args[0]){
    case 'loziziki' :
      message.react('✅');
      message.channel.sendMessage('```Gej!```')
      break
      case 'milox' :
        message.react('✅');
        message.channel.sendMessage('Najjaci 💪')
        break
        case 'stajeluka?' :
      message.react('✅');
      message.channel.sendMessage('```Pedercina!```')
      message.channel.sendMessage('```Pedercina!```')
      break
    case 'obrisi':
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('```Nemas premisiju za to!```'),message.react('❌'); 
      if(!args[1]) return message.replay('-obrisi ')
      message.react('✅');
      message.channel.bulkDelete(args[1]);
      break
      case 'ip' :
        message.channel.sendMessage('IP: Uskoro!')
        break
      case 'discord' :
          message.channel.sendMessage('Discord link: https://discord.gg/mYDfxsV')
          break
      case "say" :
        if (message.deletable) message.delete();
              if (!message.member.hasPermission("MANAGE_MESSAGES"))
                  return message.reply("Nemas premisiju.").then(m => m.delete(2000));
      
              if (args.length < 0)
                  return message.reply("Nista da kazes?").then(m => m.delete(1000));
      
              const roleColor = message.guild.me.highestRole.hexColor;

              let sayArgs = args.slice(1).join(" ");

              if (args[0].toLowerCase() === "embed") {
                  const embed = new RichEmbed()
                      .setDescription(args.slice[1].join(" "))
                      .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);
      
                  message.channel.send(embed);
              } else {
                message.channel.send(sayArgs);
              }
      break

          case 'glasanje' :
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```Nemas premisiju za to!```'),message.react('❌'); 
            const Embed = new RichEmbed()
            .setColor(0xFFC300)
            .setTitle("Glasanje")
            .setColor(0xFFC300)
            .setDescription("Glasajte")

            if(!args[1]){
              message.channel.send(Embed)
              break;
            }

            let msgArgs = args.slice(1).join(" ");

            message.channel.send("📝" + " " + "**" + msgArgs + "**") .then(messageReaction => {
              messageReaction.react("✅");
              messageReaction.react("❌");
              message.delete(1000).catch(console.error);
            });
            break;
            case "mute" :
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```Nemas premisiju za to!```'),message.react('❌'); 
            let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]))
            if(!person) return message.reply("Ne mogu pronaci tog clana!");

            let mainrole = message.guild.roles.find(role => role.name === "🌆 | ᴮᵃˡᵏᵃⁿ ꜱᴇɴᴏɴ  ᴿᵒˡᵉᵖˡᵃʸ");
            let muterole = message.guild.roles.find(role => role.name === "Muted");

            if(!muterole) return message.reply("Ne mogu pronaci Muted role");

            let time = args[2];

            if(!time){
              return message.reply("Izaberi vreme!");
            
            }

            person.removeRole(mainrole.id);
            person.addRole(muterole.id);

            message.channel.send(`@${person.user.tag} je mutiran na ${ms(ms(time))}`);

            setTimeout(function() {
              person.addRole(mainrole.id);
              person.removeRole(muterole.id);
              message.channel.send(`@${person.user.tag} je odmutiran!`);
            }, ms(time));

            break;

            case "kikuj" :
            if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```Nemas premisiju za to!```'),message.react('❌');       
            const user = message.mentions.users.first();
            if(user) {
              const member = message.guild.member(user);
    
              if(member) {
                member.kick('Kicked by Milox').then(() => {
                  message.reply("Kickovan!")
                }).catch(err => {
                  message.reply('Ne mogu ga kick');
                  console.log(err);
                });
              } else {
                message.reply('Nije clan discorda!')
              }
            }else {
              message.reply('Upisi ime clana!')
            }
            break;

          case "ban" :
          if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('```Nemas premisiju za to!```'),message.react('?');      
          const igrac = message.mentions.users.first();
          if(igrac) {
            const member = message.guild.member(igrac);

            if(member) {
              member.ban('Banned by Milox bot!').then(() => {
                message.reply(`${igrac.tag} je banovan!`)
              }).catch(err => {
                message.reply(`Ne mog uga ban`)
                console.log(err);
              });
            } else {
              message.reply('Nije clan discorda!')
            }
          } else {
            message.reply('Upisi ime clana!')
          }
          break;
  }
});

bot.login(token)