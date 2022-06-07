module.exports = {
    name: 'recruit',
    description: 'This is the 34th Recruitment Command!',
    execute(message,args,client){

        if(message.member.roles.cache.has('957685428545257476'))
        {
            //find the Member through @mention
            const member = message.mentions.users.first();
            const comTag = message.guild.roles.cache.find(role => role.name === '34th AL Community');
            const rTag = message.guild.roles.cache.find(role => role.name === 'Recruit');
            const rif = message.guild.roles.cache.find(role => role.name === 'Rifleman');
            const reserve = message.guild.roles.cache.find(role => role.name === 'Reserves');
            const civ = message.guild.roles.cache.find(role => role.name === 'Civillian');
            const one = message.guild.roles.cache.find(role => role.name === 'S-1');
            const three = message.guild.roles.cache.find(role => role.name === 'S-3');
            if(member)
            {
                const memberTarget = message.guild.members.cache.get(member.id);
                memberTarget.roles.add(comTag);
                memberTarget.roles.add(rTag);
                memberTarget.roles.add(rif);
                memberTarget.roles.add(reserve);
                memberTarget.roles.remove(civ);
                message.channel.send(member.toString() + ' Recruited Sucesfully!');
                //sends general welcome message
                client.channels.cache.get("957685429518364677").send('Welcome ' + member.toString() + ' to the 34th Assault Legion! S-3 Training Staff will be contacting you once online! Please change your number and nickname! (Remember, Numbers above 1000 only!)');
                client.channels.cache.get("957685429979713622").send('NEW MEMBER HAS JOINED: ' + member.toString() + '\n' + one.toString() + ' Please Stand by for user to change their name to add to the ORBAT \n' + three.toString() + ' Please contact the recruit at your earliest convenience in order to organise a Training!');

                memberTarget.setNickname('CR-#### "ENTER NICKNAME"')
            }else{
                message.channel.send('You couldnt recruit that member')
            }
        } else {
            message.channel.send('Im sorry, you are not apart of Section 2 Staff. You are not allowed to use this command.')
        }
    }
}