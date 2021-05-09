const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const commands = `connect\`\` - ให้บอทเข้าห้องที่คุณอยู่
   disconnect\`\` - ให้บอทออกจากห้องที่คุณอยู่
   play <Song Name or url>\`\` - เล่นเพลงจาก youtube
   pause\`\` - หยุดเพลงที่กำลังเล่น
   resume\`\` - เล่นเพลงที่หยุดชั่วคราว
   queue\`\` - แสดงคิวเพลงของเซิร์ฟเวอร์
   skip\`\` - ข้ามไปยังเพลงถัดไป
   skipto < ใส่จำนวน >\`\` - ข้ามไปยังเพลงที่ต้องการ
   stop\`\` - หยุดเพลงและล้างคิว
   volume <volume count or none>\`\` - ดูหรือปรับระดับของเสียงเพลง
   np\`\` - แสดงเพลงที่กำลังเล่น
   lyrics\`\` - เนื้อเพลง
   shuffle\`\` - สุ่มคิวเพื่อที่จะเล่นเพลงต่อไป
   invite\`\` - ลิงก์สำหรับเชิญบอท
   loop\`\` - เปิด / ปิดการวนซ้ำสำหรับเพลงที่กำลังเล่นอยู่
   remove <Target number>\`\` - ลบเพลงออกจากคิว
   help\`\` - คำสั่งที่สามารถใช้ได้
   math\`\` - เครื่องคิดเลข
   kinnom\`\` - Bot Creator
   tictactoe\`\` - O X
   image\`\` - Google image
   serverinfo\`\` - ข้อมูลโดยรวมของเซิร์ฟเวอร์
   ping\`\` - Latency
   weather\`\` - พยากรณ์อากาศ
   corona\`\` - ข้อมูลต่างๆเกี่ยวกับ Covid-19`;

  const revised = commands
    .split("\n")
    .map((x) => "• " + "``" + client.config.prefix + x.trim())
    .join("\n");

  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Dash Assistance Commands Help",
        "https://d1fdloi71mui9q.cloudfront.net/EUQ3iWeTwuBrqwGs4c3Q_JbdJ86Q90TXH61gH"
      )
      .setColor("#134EEE")
      .setTimestamp()
      .setFooter('KINNOM')
      .setDescription(revised)
  );
};
