const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "reset",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const member = message.mentions.members.first();

    if(!message.member.permissions.has("MANAGE_CHANNELS")) return;
    if (!member) return message.reply("เลือกสมาชิก");

    try {
      member.setNickname(null);
    } catch (err) {
      message.reply(
        "I do not have permission to reset " + member.toString() + " nickname!"
      );
    }
  },
};