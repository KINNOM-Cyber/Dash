const { MessageEmbed } = require("discord.js");

exports.run = async (client, message) => {
  message.channel.send(
    new MessageEmbed()
      .setAuthor(
        "Invite Me",
        "https://d1fdloi71mui9q.cloudfront.net/EUQ3iWeTwuBrqwGs4c3Q_JbdJ86Q90TXH61gH"
      )
      .setColor("BLUE")
      .setTimestamp()
      .setDescription(
        "https://discord.com/oauth2/authorize?client_id=" +
          client.user.id +
          "&permissions=" +
          "37080128" +
          "&scope=" +
          "bot"
      )
  );
};
