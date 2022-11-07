---
sidebar_position: 1
sidebar_label: "Welcome to WalletBot"
slug: /
title: Welcome to WalletBot!
---

<head>
    <meta property="og:title" content="WalletBot Docs" />
    <meta
        property="og:description"
        content="The All-in-One bot Managing Collabs, Whitelists & Collecting Wallets. Made for all Web 3.0 Discord Communities, NFTs, DAOs, DeFis and others!"
    />
    <meta
        property="description"
        content="The All-in-One bot Managing Collabs, Whitelists & Collecting Wallets. Made for all Web 3.0 Discord Communities, NFTs, DAOs, DeFis and others!"
    />
    <meta property="og:image" content="https://raw.githubusercontent.com/WalletBotTeam/.github/main/WalletBot.png" />
</head>

# Welcome to WalletBot!


The bot is a cumulation of some existing features from other overpriced bots (with improvements), and some brand new, unique features. The bot has 4 Main features which all complement each other:

## Features:

### 1) Wallet Collection for Whitelisted users

* Only users with certain roles can submit wallets
* Multiple Panels & Cryptocurrencies support (ETH, SOL, etc.)
* Minimum Crypto balance to submit wallet
* Each panel is independent and can have specific requirements.
* Give a role to users after they’ve submitted their wallet
* OG Role for first X users who submit their wallet
* Auto-remove wallets if the user leaves the server

### 2) Auto-whitelist 
* Easiest way to manage Collabs, no more “open ticket to claim `Whitelist` role”
* Automatically assign the whitelisted to specific users when they join the server
* Auto-whitelist respects Discord’s rules screening & any verification you have setup with bot (so users don’t get the `@whitelist` role without verifying)
* Assign an additional specific role for each “auto-whitelist”
* Force run any “auto-whitelist” to add roles to users already in the server
* Get stats for each auto-whitelist: How many auto-whitelisted members joined the server, left the server, in the server but pending verification
* Manage Multiple “auto-whitelists” without anyone ever needing to open a ticket to claim the `@whitelist` role
  
### 3) Whitelist Notification to User 
* Informing the user that they’ve received the `@whitelist` role and can submit their wallet
* No more random “role check” messages in chats
* No more cumbersome tickets when users join from a collab asking for `@whitelist` role
* Ping users with a message in a specific channel
* Ghost ping users in the `#submit-wallet` channel (so they can see where to submit their wallet)
* Direct Message users that they can submit their wallet and an optional message for them to close their DMs and how to close their DMs [CUSTOM BOT ONLY]
  
### 4) Whitelist & Wallet Logging 
* Whitelist role logs for seeing when and how users got the Whitelisted role (Assigned by a Staff Member, Auto-whitelist or another bot)
* Whitelist role logs also logs when the Whitelist role is removed from a user
* Wallet Logs for seeing the wallet submissions in real real time. Gives information such as their wallet address, current crypto balance, link to ETHERSCAN
* Wallet logs also show when a users wallet was removed from a Panel due to the wallet being removed by staff member, or if the user left the server

Each feature works in conjunction with the other. It is advised to set up all features, besides “auto-whitelist” if you don’t need it. 
