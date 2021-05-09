const {message} = require('discord.js')
module.exports = {
    name: "nuke",
    /**
     * @param {*} client
     * @param {Message} message
     * @param {*} args
     */
     run: async(client, message, args) =>{
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('I need manage channels permission');

        message.channel.clone().then((ch) =>{
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();

            ch.send('This channel has been nuked');
        })
    }
}