# Expo Build Notifier

![version](https://img.shields.io/npm/v/expo-build-notifier "Version")
![npm](https://img.shields.io/npm/dt/expo-build-notifier.svg "Total Downloads")

Use this to post a message to your chosen platform each time your Expo project is published. Current support for Discord and Slack.

- [Installation - Discord](#installation)
- [Examples](#examples)
    - [Basic Usage](#basic)
    - [Optional Properties](#optional-properties)
- [Roadmap](#roadmap)
- [Notes](#notes)
- [License](#license)



# Installation
1. Create a Webhook for the channel you want the messages to display in.
    - [Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks "Discords How-to-Guide for Webhooks")
    - [Slack](https://api.slack.com/messaging/webhooks#posting_with_webhooks "Slacks How-to-Guide for Webhooks")

2. Install the package as shown below.

| NPM                               | Yarn                                 |
| --------------------------------- | ------------------------------------ |
| ```npm i expo-build-notifier``` | ```yarn add expo-build-notifier``` |

3. Add one of the below examples to your app.json in the root of your Expo React Native App.


# Examples

## Basic
```
"expo": {
    "hooks": {
        "postPublish": [
        {
            "file": "expo-build-notifier",
            "config": {
                "type": "slack",
                "webhookURL": "Insert_Webhook_URL",
            }
        }
        ]
    }
}
```

## Optional Properties
```
"expo": {
    "hooks": {
        "postPublish": [
        {
            "file": "expo-build-notifier",
            "config": {
                "type": "discord",
                "webhookURL": "Insert_Webhook_URL",
                "usernameType": "discordWebhook",
                "hideVersion": true,
                "hideReleaseChannel": true
            }
        }
        ]
    }
}
```
| Required | Parameter     | Value   | Default Value | Options                     |
| :------: | ------------- | ------- | ------------- | --------------------------- |
|  ✔️ Yes  | type          | string  |               | "discord", "slack"          |
|  ✔️ Yes  | webhookURL    | string  |               |                             |
|  ✔️ Yes  | webhookURL    | string  |               |                             |
|   ❌ No   | usernameType  | strong  | "default"     | "default", "discordWebhook" |
|   ❌ No   | hideVersion   | boolean | false         | true, false                 |
|   ❌ No   | hideTimestamp | boolean | false         | true, false                 |

If you are using slack you can't use **usernameType**, you have to set up the user details in your app settings (Slack API App).



# Roadmap
1. ✔️ Add Slack Functionality (**Version 1.1.0**)
2. Add Error Handling
3. Add Teams Support
3. Add Telegram Support
5. Refactor Code
4. Work towards Version 2
    - The aim for version 2 will be to add a build URL (.apk, .ipa) to the message instead of a link to the project page.




# Notes
If you don't set the type, it will try and find the information from the URL. If this fails, it will error. It is still best practise to define the type.



# License
[MIT](./LICENSE)







SLACK NOTES
https://api.slack.com/messaging/webhooks#posting_with_webhooks