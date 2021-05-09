const {Client, message, MessageEmbed } = require('discord.js')

module.exports = {
    name: "ban",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if(!message.member.permissions.has("BAN_MEMBERS")) return;

        const member = message.mentions.members.first();
        if (!member) return message.reply("Please mention a member to ban!");

        if (
            message.member.roles.highest.position <= 
            member.roles.highest.position
        ) 
            return message.reply(
                "You cant punish beacuse u either hvave saem role or your role is lower"
            );
        const reason = args.slice(1).join(" ") || "No Reason Provided";
        
        member.ban({ reason });
        message.channel.send(`Banned ${member} for ${reason}`);
    },
};