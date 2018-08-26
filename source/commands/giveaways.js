const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "giveaway",
            aliases: ["cmds"]
        });
    }

    execute(message) {
        const prefix = this.client.config.prefix;
        message.reply('Hey! Check your DMs. :wink:');
        message.author.send(`\`\`\`md\nlist of commands\n---------------------------\n`
        +`> ${prefix}create\n" + "Create a giveaway\n`
        +`> ${prefix}delete\n" + "Delete the previous giveaway\n`
        +`> ${prefix}draw\n" + "Force a draw\n`
        +`> ${prefix}redraw\n" + "Redraw a winner\n` 
        +`> ${prefix}invite\n" + "Get an invite link for the bot\n`
        +`> ${prefix}help\n" + "to see the main help\n`
        +`> ${prefix}ping\n" + "Check to see if the bot responds\`\`\``);
    }
};