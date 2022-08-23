const Discord = require("discord.js")
const config = require("../config.json")

module.exports = {
    description: "mute user",
    category: "moderation",
    testOnly: true,
    slash: true,
    guildOnly: true,

    options: [
        {
            name: "user",
            required: true,
            description: "user to mute",
            type: 6,
        }
    ],

    permissions: ["ADMINISTRATOR"],

    callback: ({interaction}) => {

        var unmutedmember = interaction.options.getMember("user")

        if(!unmutedmember.roles.cache.has(config.mute)) {
            interaction.reply({content: "user already unmuted", ephemeral: true})
            return;
        } else {

        unmutedmember.roles.remove(config.mute) //if reason, kick
            .catch(error => interaction.reply({ content: `Sorry ${message.author} I couldn't unmute because of : ${error}`, ephemeral: true})); //if error, display error
        interaction.reply({content: `${unmutedmember.user} has been unmuted by ${interaction.user.username}!`, ephemeral: true});
    
}
    }
}