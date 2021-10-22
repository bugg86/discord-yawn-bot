module.exports = {
    name : 'ping',
    description : 'This is a ping command.',
    execute(message, args) {
        if (message.member.roles.cache.has('901223415539716097') || message.member.roles.cache.has('888620709084024872')) {
            message.channel.send({ content : 'ping bitch'});
        } else {
            message.channel.send({ content : "Fuck off you can't use me."});
        }
    }
}