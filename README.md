# Expo Build Notifier

![version](https://img.shields.io/npm/v/expo-build-notifier "Version")
![npm](https://img.shields.io/npm/dt/expo-build-notifier.svg "Total Downloads")

Use this to post a message to your chosen platform each time your Expo project is published. Currently only Discord is supported.

- [Installation - Discord](#installation)
- [Examples](#examples)
    - [Basic Usage](#basic)
    - [Optional Properties](#optional-properties)
- [Roadmap](#roadmap)
- [License](#license)



# Installation
1. [Create a Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks "Discords How-to-Guide for Webhooks") for the Discord Channel you want the messages to come through to.
    - **N.B.** If you use the usernameType *discordWebhook" it is important to set up the Name and Avatar when creating the webhook (You can update this later).

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
                "type": "discord"
                "webhookURL": "Insert_Webhook_URL",
                "hideVersion": true,
                "hideReleaseChannel": true
            }
        }
        ]
    }
}
```
| Required | Parameter     | Value   | Default Value | Options     |
| :------: | ------------- | ------- | ------------- | ----------- |
|   ❌ No   | type          | string  | "discord"     | "discord"   |
|  ✔️ Yes  | webhookURL    | string  |               |             |
|   ❌ No   | hideVersion   | boolean | false         | true, false |
|   ❌ No   | hideTimestamp | boolean | false         | true, false |



# Roadmap
I plan to add Slack and maybe Teams functionality in the near future. 
The aim for version 2 will be to add a build URL (.apk, .ipa) to the message instead of a link to the project page.



# License
[MIT](./LICENSE)