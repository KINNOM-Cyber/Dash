const {Client, message, MessageEmbed } = require('discord.js');

module.exports = {
    name: "unban",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!message.member.permissions.has("BAN_MEMBERS")) return;

        const id = args[0];
        if(!id) return message.reply("Please send an id!")
        
        const bannedMembers = await message.guild.fetchBans();
        if (!bannedMembers.find((user) => user.user.id === id))
            return message.reply("User is not banned!");

        message.guild.members.unban(id);
        message.reply("Unbanned User!")

    },
};