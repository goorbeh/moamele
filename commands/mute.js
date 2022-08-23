const Discord = require("discord.js");
const { realpathSync } = require("fs");
const config = require("../config.json")

module.exports = {
    description: "unmute user",
    category: "moderation",
    testOnly: true,
    slash: true,
    guildOnly: true,

    options: [
        {
            name: "user",
            required: true,
            description: "user to unmute",
            type: 6,
        },
        {
            name: "reason",
            required: true,
            description: "tell the reason",
            type: Discord.Constants.ApplicationCommandOptionTypes.STRING,
        }
    ],
    permissions: ["ADMINISTRATOR"],

    callback: ({interaction}) => {

        var mutedmember = interaction.options.getMember("user");

        if(mutedmember.roles.cache.has(config.mute)) {
            interaction.reply({content: "this user already muted",  ephemeral: true})
            return;
        } else {

        if (mutedmember.permissions.has("ADMINISTRATOR")) return interaction.reply("I cannot mute this member!")
        var mutereason = interaction.options.getString("reason") 
        mutedmember.roles.add(config.mute)
        .catch(error => message.reply(`Sorry ${interaction.user.username} I couldn't mute because of : ${error}`)); 
        interaction.reply(`${mutedmember.user} has been muted by ${interaction.user.username} because: ${mutereason}`);
    }
}
}