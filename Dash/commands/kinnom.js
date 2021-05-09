const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("K I N N O M")
    .setURL("https://steamcommunity.com/id/Ethan_KINNOM/")
    .setAuthor("KITTIHENGCHAROEN CHAEMPRASERT", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png","https://www.facebook.com/Kinnomnailift.KINNOM/")
    .setColor('#134eee')
    .setFooter("Dash Assistance Bot by KINNOMNAILIFT", "https://d1fdloi71mui9q.cloudfront.net/EUQ3iWeTwuBrqwGs4c3Q_JbdJ86Q90TXH61gH")
    .addFields(
        { name: 'Email', value: 'kinnomnailift.contact@gmail.com'},
        
    )
    .setImage("")
    .setThumbnail("https://lh3.googleusercontent.com/kjM77dRhBl7QCOoE2Yb9SI-Pb0zdEBcG0yxwabaNiZHYyX3QWW45MtOq1QlgQOFS44s9Fw_MxL4Iy-5VE9LZGw")
    .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "kinnom",
    
}