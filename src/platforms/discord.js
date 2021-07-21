module.exports = {
    message: function (item, url, iosManifest) {
        const { Webhook, MessageBuilder } = require('discord-webhook-node');
        const hook = new Webhook(item.webhookURL);

        //  Changing the User Details for the Message
        if (item.usernameType === 'default' || item.usernameType === undefined) {
            hook.setUsername(iosManifest.name);
            hook.setAvatar(iosManifest.iconUrl);
        }
        
        //  Set Message Details
        const message = new MessageBuilder()
        .setTitle(iosManifest.name)
        .setURL(url)
        .setColor(iosManifest.primaryColor)
        .setThumbnail(iosManifest.iconUrl)
        .setTimestamp();
        
        //  Optional Information
        if ( item.hideVersion === false || item.hideVersion === undefined ) message.addField('Version', iosManifest.version);
        if ( item.hideReleaseChannel === false || item.hideReleaseChannel === undefined ) message.addField('Release Channel', iosManifest.releaseChannel || 'default');

        //  Send Message
        hook.send(message);
    }
}