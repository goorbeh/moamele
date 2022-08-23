const Discord = require("discord.js")

module.exports = {
    description: "slowmode",
    category: "moderation",
    testOnly: true,
    slash: true,
    guildOnly: true,

    options: [
        {
            name: "time",
            required: true,
            description: "give time to slowmode",
            type: 10,
        }
    ],

    callback: ({interaction, channel}) => {
      const time = interaction.options.getNumber("time")
      const sloweror2 = new Discord.MessageEmbed()
        .setAuthor("Eror")
        .setDescription(`A Slowmode Cannot Be More Then 6 Hours`)
        .setColor("RED")
      if (time > 21600) return interaction.reply({embeds: [sloweror2], ephemeral: true})
  
      channel.setRateLimitPerUser(time)
      const slow = new Discord.MessageEmbed()
        .setAuthor("SlowMode")
        .setDescription(`Slowmode Enabled For **${time}** Seconds`)
        .setColor("RED")
      interaction.reply({embeds: [slow]})
    }
}