Logger = require('../modules/logger');
logger = new Logger('main');
const db = require('quick.db')
module.exports ={
    name: "prefix",
    description: "sets prefix",
    args: true,
    execute(message, args){
        if (message.member.roles.cache.find(r => r.name === "Admin")) {
            if (args[0] == 'default') {
                db.set(`prefix.${message.guild.id}`, '#')
                message.channel.send(`Prefix set to default`)
            } else {
                db.set(`prefix.${message.guild.id}`, args[0])
                message.channel.send(`Prefix set to ${args[0]}`)
            }
        } else {
            message.channel.send('You dont have perms for that!')
        }
        
    }
}