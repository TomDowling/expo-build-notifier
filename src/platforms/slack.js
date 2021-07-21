module.exports = {
    message: function (item, url, iosManifest) {
        const slackNotify = require('slack-notify')(item.webhookURL);
        const releaseChannelURL = iosManifest.releaseChannel === 'default' ? '' : '?release-channel='+encodeURIComponent(iosManifest.releaseChannel);
        let VersionText = '\n';
        let ReleaseChannelText = '\n';
        
        //  Optional Information
        if ( item.hideVersion === false || item.hideVersion === undefined ) VersionText = `*Version:* ${iosManifest.version}`;
        if ( item.hideReleaseChannel === false || item.hideReleaseChannel === undefined ) ReleaseChannelText = `*Release Channel:* ${iosManifest.releaseChannel || 'default'}`;

        //  Send Message
        slackNotify.send(
            {
                "blocks": [
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": `*<${url + releaseChannelURL}|${iosManifest.name}>* \n ${VersionText} \n ${ReleaseChannelText}`,
                        },
                        "accessory": {
                            "type": "image",
                            "image_url": iosManifest.iconUrl,
                            "alt_text": `${iosManifest.name} App Icon`
                        }
                    }
                ]
            }
        )
    }
}