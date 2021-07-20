module.exports = ({ url, iosManifest, config }) => {
    //  Variables
    const { Webhook, MessageBuilder } = require('discord-webhook-node');
    const {
        hideReleaseChannel,
        hideVersion,
        type,
        usernameType,
        webhookURL
    } = config;
    const {
        iconUrl,
        name,
        primaryColor,
        releaseChannel,
        version
    } = iosManifest;
    const hook = new Webhook(webhookURL);
    
    //  Changing the User Details for the Message
    if (usernameType === 'default' || usernameType === undefined) {
        hook.setUsername(name);
        hook.setAvatar(iconUrl);
    }
    
    //  Set Message Details
    const message = new MessageBuilder()
    .setTitle(name)
    .setURL(url)
    .setColor(primaryColor)
    .setThumbnail(iconUrl)
    .setTimestamp();
    
    //  Optional Information
    if (hideVersion === false || hideVersion === undefined ) message.addField('Version', version);
    if (hideReleaseChannel === false || hideVersion === undefined ) message.addField('Release Channel', releaseChannel);

    //  Send Message
    hook.send(message);
}