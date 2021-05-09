const axios = require('axios');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "corona",
    category: "extra",
    run: async (client, message, args) => {
        const baseUrl = "https://corona.lmao.ninja/v2";

        let url, response, corona;

        try {
            url = args[0] ? `${baseUrl}/countries/${args[0]}`:`${baseUrl}/all`
            response = await axios.get(url)
            corona = response.data
        } catch (error) {
            return message.channel.send(`***${args[0]}*** doesn't exist, or data isn't being collected`)
        }

        const embed = new MessageEmbed()
            .setTitle(args[0] ? `${args[0].toUpperCase()} Stats` : 'Total Corona Cases World Wide')
            .setColor('RANDOM')
            .setThumbnail(args[0] ? corona.countryInfo.flag : 'https://i.giphy.com/YPbrUhP9Ryhgi2psz3.gif')
            
            .addField('ผู้ติดเชื้อทั้งหมด:', corona.cases.toLocaleString(), false) 
            .addField('ผู้ติดเชื้อใหม่วันนี้:', corona.todayCases.toLocaleString(), false)
            .addField('ผู้เสียชีวิตทั้งหมด:', corona.deaths.toLocaleString(), false)
            .addField('รักษาหายทั้งหมด:', corona.recovered.toLocaleString(), false)
            .addField('กำลังรักษา:', corona.active.toLocaleString(), false)
            .addField('กรณีสำคัญ:', corona.critical.toLocaleString(), false)
            .addField('รักษาหายวันนี้:', corona.todayRecovered.toLocaleString().replace("-", ""), false)
            .addField('เสียชีวิตรายใหม่:', corona.todayDeaths.toLocaleString(), false)
        
            .setTimestamp()
            
            message.channel.send(embed);
    },
};
