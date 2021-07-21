const discord = require('./platforms/discord');
const slack = require('./platforms/slack');
const telegram = require('./platforms/telegram');

module.exports = ({ url, iosManifest, config }) => {

    config.items.map((item) => {
        let urlType = '';

        // Check URL for platform
        if (item.type === undefined) {
            if ( item.webhookURL.includes('discord') ) urlType = 'discord'
            if ( item.webhookURL.includes('slack') ) urlType = 'slack'
        }

        // Function for each platform
        if (item.type === 'discord' || urlType === 'discord') {
            discord.message(item, url, iosManifest);
        } else if (item.type === 'slack' || urlType === 'slack') {
            slack.message(item, url, iosManifest);
        } else if (item.type === 'telegram') {
            telegram.message(item, url, iosManifest);
        } else if (urlType.length < 1) {
            console.error('Please provide the Webhook Type.')
        }
    })
}