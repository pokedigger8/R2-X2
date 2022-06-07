module.exports = {
    name: 'ping',
    description: 'This is a simple Ping command!',
    execute(message,args){
        message.channel.send('Pong!');
    }
}