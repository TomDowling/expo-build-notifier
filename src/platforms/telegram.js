module.exports = {
    message: function (item, url, iosManifest) {
        const Slimbot  = require('slimbot');
        const token = item.token;
        const bot = new Slimbot (token);
        const chatID = item.chatID;
        const releaseChannelURL = iosManifest.releaseChannel === 'default' ? '' : '?release-channel='+encodeURIComponent(iosManifest.releaseChannel);
        let VersionText = '';
        let ReleaseChannelText = '';
        
        //  Optional Information
        if ( item.hideVersion === false || item.hideVersion === undefined ) VersionText = `<strong>Version:</strong> ${iosManifest.version}`;
        if ( item.hideReleaseChannel === false || item.hideReleaseChannel === undefined ) ReleaseChannelText = `<strong>Release Channel:</strong> ${iosManifest.releaseChannel || 'default'}`;
        
        //  Telegram Settings
        let textString = `<a href="${url + releaseChannelURL}">${iosManifest.name}</a>\n${VersionText}\n${ReleaseChannelText}`;
        let optionalParams = {
            parse_mode: "HTML",
            disable_web_page_preview: false,
            caption: textString
        }

        //  Send Message
        bot.sendPhoto(chatID, iosManifest.iconUrl, optionalParams);
    }
}