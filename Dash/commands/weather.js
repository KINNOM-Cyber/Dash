const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "weather",
    description: "Checks a weather forecast",

    async run (client, message, args){

    weather.find({search: args.join(" "), degreeType: 'C'}, function (error, result){
        // 'C' can be changed to 'F' for farneheit results
        if(error) return message.channel.send(error);
        if(!args[0]) return message.channel.send('เลือกพื้นที่')

        if(result === undefined || result.length === 0) return message.channel.send('**Invalid** location');

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
        .setDescription(`**${current.skytext}**`)
        .setAuthor(`Weather forecast for ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor("RANDOM")
        .addField('เขตเวลา', `UTC${location.timezone}`, true)
        .addField('Degree Type', 'Celsius', true)
        .addField('อุณหภูมิ', `${current.temperature}°`, true)
        .addField('ลม', current.winddisplay, true)
        .addField('รู้สึกเหมือน', `${current.feelslike}°`, true)
        .addField('ความชื้น', `${current.humidity}%`, true)
        .setTimestamp()


        message.channel.send(weatherinfo)
        })        
    }
}