/**
 * Module Imports
 */
const { Client, Collection, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json");

const client = new Client({ disableMentions: "everyone" });

client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Client Events
 */

client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`-help`);
});
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === PREFIX+"bot") {
       let inline = true
    let usersize = client.users.cache.size
    let chansize = client.channels.cache.size
    let uptimxd = client.ws.uptime 
    let servsize = client.guilds.cache.size
    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime About")
      .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@694465071853862982> <@739293868222054482>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: Mahmoud`)
      .setColor("#F8AA2A");

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === PREFIX+"Bot") {
       let inline = true
    let usersize = client.users.cache.size
    let chansize = client.channels.cache.size
    let uptimxd = client.ws.uptime 
    let servsize = client.guilds.cache.size
    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime About")
      .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@694465071853862982> <@739293868222054482>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: Mahmoud`)
      .setColor("#F8AA2A");

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === PREFIX+"BOt") {
       let inline = true
    let usersize = client.users.cache.size
    let chansize = client.channels.cache.size
    let uptimxd = client.ws.uptime 
    let servsize = client.guilds.cache.size
    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime About")
      .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@694465071853862982> <@739293868222054482>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: Mahmoud`)
      .setColor("#F8AA2A");

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
}
  })

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === PREFIX+"BOT") {
       let inline = true
    let usersize = client.users.cache.size
    let chansize = client.channels.cache.size
    let uptimxd = client.ws.uptime 
    let servsize = client.guilds.cache.size
    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime About")
      .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@694465071853862982> <@739293868222054482>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: Mahmoud`)
      .setColor("#F8AA2A");

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === PREFIX+"bOt") {
       let inline = true
    let usersize = client.users.cache.size
    let chansize = client.channels.cache.size
    let uptimxd = client.ws.uptime 
    let servsize = client.guilds.cache.size
    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime About")
      .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@694465071853862982> <@739293868222054482>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: Mahmoud`)
      .setColor("#F8AA2A");

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === PREFIX+"bOT") {
       let inline = true
    let usersize = client.users.cache.size
    let chansize = client.channels.cache.size
    let uptimxd = client.ws.uptime 
    let servsize = client.guilds.cache.size
    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime About")
      .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@694465071853862982> <@739293868222054482>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: Mahmoud`)
      .setColor("#F8AA2A");

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content === PREFIX+"boT") {
       let inline = true
    let usersize = client.users.cache.size
    let chansize = client.channels.cache.size
    let uptimxd = client.ws.uptime 
    let servsize = client.guilds.cache.size
    let helpEmbed = new MessageEmbed()
      .setTitle("NeutronPrime About")
      .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@694465071853862982> <@739293868222054482>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `${usersize}`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: Mahmoud`)
      .setColor("#F8AA2A");

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
})

const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

client.on("message", async (message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  const prefixRegex = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`);
  if (!prefixRegex.test(message.content)) return;

  const [, matchedPrefix] = message.content.match(prefixRegex);

  const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) return;

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 1) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error executing that command.").catch(console.error);
  }
});
