const Discord = require('discord.js');

const client = new Discord.Client({intents : [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_VOICE_STATES, Discord.Intents.FLAGS.GUILD_MESSAGES]});

const prefix = '!snorlax';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Bot working.')
});

client.on('messageCreate', message => {    
    if (!message.content.startsWith(prefix) || message.author.bot) { return; }

    const args = message.content.slice(prefix.length).split(" ");
    // console.log(args.shift().toLowerCase());
    const empty = args.shift();
    const command = args.shift().toLowerCase();
    console.log(command);

    if(command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else {
        message.channel.send({content : "That's not a command dumbass."})
    }
});

const token = 'OTAxMjAzODY0MjI3ODE5NjEy.YXMdgA.jrMEBaa95oQjuNB0Yk-vuW0cS-Y';

client.login(token);