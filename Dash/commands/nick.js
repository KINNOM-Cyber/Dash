const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "nick",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

    if(!message.member.permissions.has("MANAGE_CHANNELS")) return;
    if (!member) return message.reply("เลือกสมาชิก");

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply("เลือกชื่อ");

    try {
      member.setNickname(arguments);
    } catch (err) {
      console.log(err);
      message.reply(
        "I do not have permission to set " + member.toString() + " nickname!"
      );
    }
  },
};