const Discord = require("discord.js");
const { client, config, auth } = require('../utils/')

exports.run = (message, args) => {

    const bot = client.getClient()
    let commandList = require('../data/commands.json')
    let member = message.member
    let isStaff = auth.isMod(member) || auth.isAdmin(member) || auth.isOwner(member)
    let flag = (args && args.length > 0) ? args[0].replace(/-+/, '').slice(0,1) : null

    let shouldDisplayUserCommands = flag === 'u' || !isStaff
    let shouldDisplayStaffCommands = isStaff && flag === 's'
    let shouldDisplayOwnerCommands = auth.isOwner(member) && flag === 'o'
    let shouldDisplayAdminCommands = auth.isAdmin(member) && flag === 'a'
    let shouldDisplayModCommands = auth.isMod(member) && flag === 'm'

    const sendNoRevealingSecretsDM = () => {
        let dmEmbed = new Discord.RichEmbed()
        dmEmbed.addField('Important Notice', 'As a staff member, in order to show the general user commands without revealing the staff commmands, use the `-u` flag.')
        message.author.send({ embed: dmEmbed })
    }

    let embedTitle = shouldDisplayStaffCommands && !auth.isOwner(member) ? `${member.highestRole.name} ` : ''

    const embed = new Discord.RichEmbed()
        .setTitle(`${embedTitle}Bot Commands`)
        .setAuthor(bot.user.username, bot.user.avatarURL)
        
        commandList.map((cmd) => {
            let cmdArgs = cmd.arguments.map(arg => {
                return `[${arg}]`
            }).join(' ')
            let fieldTitle = `${config.getCommandPrefix()}${cmd.command} ${cmdArgs}`

            switch(cmd.permissionLevel) {
                case "all":
                    if (shouldDisplayUserCommands)
                        embed.addField(fieldTitle, cmd.description)
                    break
                case "mod":
                    if (shouldDisplayModCommands || shouldDisplayStaffCommands)
                        embed.addField(fieldTitle, cmd.description)
                    break
                case "admin":
                    if (shouldDisplayAdminCommands || shouldDisplayStaffCommands)
                        embed.addField(fieldTitle, cmd.description)
                    break
                case "owner":
                    if (shouldDisplayOwnerCommands)
                        embed.addField(fieldTitle, cmd.description)
                    break
            }
        })

    return !flag && isStaff ? sendNoRevealingSecretsDM() : message.channel.send({embed});
}
