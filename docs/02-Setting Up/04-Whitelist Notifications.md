# Whitelist Notifications

Whitelist notifications are used to inform users that they have recived the required role for a specfic panel. This can be useful, especially, for NFT servers where whitelisted users get a `@Whitelist` role which unlocks channels or in this case allows them to submit their wallet. 

:::info
If you are using a strict security / automoderation bot you may need to allow WalletBot to mass mention! 
:::

```go
/wl_notification enable <id> [message_channel] [ghost_ping_channel]
```

Mandatory:

- id: Which panel’s “required” role to monitor and send notificaiton

You have to choose either one or both options:

- message_channel: The channel in which the user will be pinged stating that they can now submit their wallet
- ghost_ping_channel: The channel in which the user is ghost pinged (pinged and then message is deleted).

The default message for the `message_channel` is shown below. Only CUSTOM BOT users are able to set their own message / embed

```go
@USER, you have been assigned the @ROLE_NAME role! 
You can now submit your wallet in #CHANNEL
```

The `#channel` is determined in which chanel the Panel message is. 

You can also send a DM to the user once they get the `@whitelist` role if their DMs are open. Along with the DM you can send them an additional message stating for them to close their DMs and a short instructions on how to do so. Custom DM message is availble for CUSTOM BOTS only.

```go
/wl_notification disable <id>
```

Mandatory:

- id: Which panel’s whitelist notification to disable.
