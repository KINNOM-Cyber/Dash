const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.permissions.has("ADMINISTATOR")) return;
    const embed = new Discord.MessageEmbed()
    .setTitle("Dash Assistance Admin Commands Help")
    .setColor('#134eee')
    .setFooter("Dash Assistance Bot by KINNOMNAILIFT", "https://d1fdloi71mui9q.cloudfront.net/EUQ3iWeTwuBrqwGs4c3Q_JbdJ86Q90TXH61gH")
    .addFields(
        { name: '-kick', value: 'เตะสมาชิกออกจากเซิร์ฟเวอร์'},
        { name: '-ban', value: 'แบนสมาชิกในเซิร์ฟเวอร์'},
        { name: '-unban <ใช้ Id ของสมาชิก>', value: 'ปลดแบนสมาชิก'},
        { name: '-clear', value: 'ลบข้อความได้สูงสุด 99'},
        { name: '-nuke', value: 'ลบข้อขวามทั้งหมดในช่องแชท'},
        { name: '-pull', value: 'ดึงสมาชิกมาหาเรา'},
        { name: '-nick', value: 'เปลี่ยนชื่อ'},
        { name: '-reset', value: 'รีเซ็ตชื่อ'},
        { name: '-announce', value: 'ประกาศต่างที่อยากประกาศ'},

        
    )
    .setTimestamp()


    message.channel.send(embed);
}

module.exports.config = {
    name: "adminguide",
    
}