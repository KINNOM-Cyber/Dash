const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  const queue = message.client.queue.get(message.guild.id);

  if (!queue)
    return message.channel.send(
      ":x: There are no songs playing in this server"
    );

  queue.loop = !queue.loop;
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Master Loop Contrller",
        "https://d1fdloi71mui9q.cloudfront.net/EUQ3iWeTwuBrqwGs4c3Q_JbdJ86Q90TXH61gH"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "**Loop is" +
          (queue.loop == true ? " Enabled " : " Disabled ") +
        "for current song :white_check_mark: **"
      )
  );
};
