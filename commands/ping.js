module.exports = {
    name : 'ping',
    description : 'This is a ping command.',
    execute(message, args) {
        message.channel.send({ content : 'fuck off'})
    }
}