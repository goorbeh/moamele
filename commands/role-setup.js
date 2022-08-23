const Discord = require("discord.js")

module.exports = {
    category: "reaction-role",
    testOnly: true,
    slash: true,
    description: "setup reaction role",
    guildOnly: true,

    callback: ({interaction}) => {
        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageSelectMenu()
            .setCustomId("reaction")
            .setPlaceholder("Please Select")
            .setOptions([
                {
                    label: "Boy",
                    description: "Boy Role",
                    emoji: "👱‍♂️",
                    value: "boy",
                }, {
                    label: "Girl",
                    emoji: "👱‍♀️",
                    description: "Girl Role",
                    value: "girl"
                }
            ])
        )

        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setDescription("Please select your role :)")

        interaction.reply({embeds: [embed], components: [row]})
    }
}