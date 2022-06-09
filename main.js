const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

const prefix = '!';

const fs = require('fs');

//const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./'+ process.cwd() +'/commands/').filter(files => files.endsWith('.js'));

for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('R2-X2 Online! All systems nominal.');
    //memberCounter(client);
});

//A messsage command
client.on('message', message =>{
    //If message doesn't start with correct command prefix or command is written by bot in text, ignore it
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command === 'ping') //This is a Ping Pong Response Command.
    {
        client.commands.get('ping').execute(message,args);
    }
    if(command === 'recruit') //Recruitment commands that enters New users into the community and notifies relevant staff!
    {
        client.commands.get('recruit').execute(message,args,client);
    }
});

client.login(process.env.DISCORD_TOKEN);