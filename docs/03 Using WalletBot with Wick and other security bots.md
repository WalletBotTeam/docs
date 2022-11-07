If your server is using a high security, anti-raid, anti-nuke bot, you will need to whitelist WalletBot to allow WalletBot to ping users. This is only applicable if you are using the **Whitelist Notifications** , especially with **auto-whitelist**, since the bot will be pinging users when they recieve the whitelisted role. :aler

:::warning
The whitelisted roles that WalletBot will assign must not have any Dangerous Permissions.
:::

## Whitelisting with [Wick](https://wickbot.com/)

WalletBot must be whitelisted for the "Mentions" filter to avoid being Quarantined by Wick for pinging users when they get the whitelisted role via the **whitelist notifcations** feature.

1. Log into Wick's Dashboard https://wickbot.com/
2. Select your server 
3. Navigate to the "Whitelist" menu,  under "Automod" on the left hand side
4. Click on the "Mentions" tab
5. Now either under **Members** paste WalletBot's ID `1008408461769457724`, OR under **Roles** select WalletBot's role from the dropdown.

That's it, you're done. WalletBot will not be quarantined by Wick anymore for pinging users.

## Whitelisting with [Security bot](https://securitybot.gg/)

:::info
Only applies if you have SecurityBot premium and are using the "Anti-Mention" and or "Anti-Ghost Ping" features
:::

WalletBot must be whitelisted for the "Anti Mentions" filter and the "Anti Ghost Ping" filters to avoid being Punished by Security bot for pinging users when they get the whitelisted role via the **whitelist notifcations** feature.

1. Log into Security bot's Dashboard https://securitybot.gg/
2. Select your server
3. Navigate to the "Whitelist" tab on the top.
4. Now either under **WHITELISTED ROLES** select WalletBot's role for "anti mentions" OR under **WHITELISTED USERS** paste in WalletBot's ID `1008408461769457724` for "Anti Mentions"
5. Repeat Step 5 for whitelisting WalletBot but now for "Anti Ghost Ping"

All done! WalletBot will no longer be flagged by Secuity bot for pinging / ghost pinging users.

## Whitelisting with other bots

There are other public and private bots in the market that have some sort of "anti-mention" feature. If you are using those bots instead of Wick or Security bot, there is usually a way to whitelist a role or user from not being flagged by the moderation bot. Please ask in the other bot's developer or support server how to whitelist another bot from mass mentioning users. If you have any doubts or would like to see a guide for another bot added on these docs, please open a ticket in the support server. 
