# Expo Build Notifier (Archive)
This was for the old Expo build process, before EAS. So this project isn't maintained any more.

![version](https://img.shields.io/npm/v/expo-build-notifier "Version")
![npm](https://img.shields.io/npm/dt/expo-build-notifier.svg "Total Downloads")

Use this to post a message to your chosen platform each time your Expo project is published. Current support for Discord, Slack and Telegram.

- [Installation - Discord](#installation)
- [Examples](#examples)
    - [Basic Discord Usage](#basic-discord-usage)
    - [Basic Slack Usage](#basic-slack-usage)
    - [Basic Telegram Usage](#basic-telegram-usage)
    - [Optional Properties](#optional-properties)
- [Roadmap](#roadmap)
- [Notes](#notes)
- [License](#license)



# Installation
1. Create a Webhook for the channel you want the messages to display in.
    - [Discord](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks "Discords How-to-Guide for Webhooks")
    - [Slack](https://api.slack.com/messaging/webhooks#posting_with_webhooks "Slacks How-to-Guide for Webhooks")
    - [Telegram](https://dev.to/rizkyrajitha/get-notifications-with-telegram-bot-537l) - Third party Article till I add one to the Github Wiki, You will need the access Token and Chat ID from this.

2. Install the package as shown below:

| NPM                               | Yarn                                 |
| --------------------------------- | ------------------------------------ |
| ```npm i expo-build-notifier``` | ```yarn add expo-build-notifier``` |

3. Add one of the below examples to your app.json in the root of your Expo React Native App.


# Examples

## Basic Discord Usage
```
"expo": {
    "hooks": {
        "postPublish": [
        {
            "file": "expo-build-notifier",
            "config": {
                "type": "discord",
                "webhookURL": "Insert_Webhook_URL",
            }
        }
        ]
    }
}
```

## Basic Slack Usage
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

## Basic Telegram Usage
```
"expo": {
    "hooks": {
        "postPublish": [
        {
            "file": "expo-build-notifier",
            "config": {
                "type": "telegram",
                "token": "API_Token",
                "chatID": "CHAT_ID"
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
| Required | Parameter     | Value   | Default Value | Options                        |
| :------: | ------------- | ------- | ------------- | ------------------------------ |
|  ✔️ Yes  | type          | string  |               | "discord", "slack", "telegram" |
|  ✔️ Yes  | webhookURL    | string  |               |                                |
|  ✔️ Yes  | webhookURL    | string  |               |                                |
|   ❌ No   | usernameType  | strong  | "default"     | "default", "discordWebhook"    |
|   ❌ No   | hideVersion   | boolean | false         | true, false                    |
|   ❌ No   | hideTimestamp | boolean | false         | true, false                    |

N.B. **usernameType** only works for Discord currently.



# Roadmap
1. ✔️ Add Slack Functionality (**Version 1.1.0**)
2. ✔️ Add Telegram Support
3. Add Telegram Help Guide in the Wiki Page
4. Add Error Handling
5. Add Teams Support
6. Refactor Code
7. Work towards Version 2
    - The aim for version 2 will be to add a build URL (.apk, .ipa) to the message instead of a link to the project page.




# Notes
If you don't set the **type**, it will try and find the information from the URL (Doesn't work for Telegram). If this fails, it will error. It is still best practise to define the **type**.



# License
[MIT](./LICENSE)
