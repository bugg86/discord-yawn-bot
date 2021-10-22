const { joinVoiceChannel, createAudioResource } = require('@discordjs/voice');

const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');

module.exports = {
    name : 'start',
    description : 'This command starts the yawning.',
    execute(message, args) {
        const vc = message.member.voice.channel;

        if (message.member.roles.cache.has('901223415539716097') || message.member.roles.cache.has('888620709084024872')) {
            if (!vc) { return message.channel.send({content : "Join a channel idiot."}) }
            const permissions = vc.permissionsFor(message.client.user);
            if(!permissions.has('CONNECT')) { return message.channel.send({content : 'Give me connect permissions bitch.'}) }
            if(!permissions.has('SPEAK')) { return message.channel.send({content : 'Give me speak permissions bitch.'}) }
            
            message.channel.send({ content : "Joining your god forsaken channel..."})

            const connection = joinVoiceChannel({
                channelId : vc.id,
                guildId : message.guild.id,
                adapterCreator : message.guild.voiceAdapterCreator
            });

            const player = createAudioPlayer();

            const resource = createAudioResource('../audio/Yawn_Sound_Effects_1.mp3');
            player.play(resource);

            connection.subscribe(player);

            setTimeout(() => connection.disconnect(), 10_000);

        } else {
            message.channel.send({ content : "Fuck off you can't use me."});
        }
    }
}