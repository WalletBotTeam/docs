# Panels & Logging

Panels are used to collect wallet addresses from users. If you have chosen a wallet log for the panel, every time a user submits their wallet address, the bot will send a log message to that channel. You can use the `/export` command to see all the wallets collected so far. All panel related start with `/panel .....` 

## Creating a panel

Start by using the `/panel create` command. As soon as you type that, you will see the slash commands menu pop up, select the `panel create` command and follow along with the auto-complete. 

```go
/panel create: <Name> <Crypto> [required_role] [completed_role] [og_role] 
[og_amount] [eth_minimum] [remove_on_leave] [whitelist_log] [wallet_log]
```

\<Mandatory\>: Cant be edited

- Name: A name for the panel. This name is not displayed when the panel is sent, it is instead for you to reference to the panel easily.
- Crypto: Select ETH, SOL, or Other. We are able to validate wallet addresses for ETH and SOL, so in case a user submits a wrong address, they will get an error asking them to check again.

[Optional]: Can be edited via `/panel edit`

- Required_role: This is the role a user **needs** in order to submit your wallet. If a user does not have this role, they will not be able to submit their wallet. This role is usually called `@Whitelist` but you can call it whatever you want. You can also set it to `@everyone` to allow anyone to submit their wallet
- completed_role: A role to assign **after** a user has submitted their wallet. Used to distinguish between users who have submitted their wallet and those who have not.
- [og_role]: The OG role is used to give the first X amount of people a role for submitting their wallet.
- [og_amount]: The amount of users you want to have the [og_role]. This role is assigned on a first come first serve basis
- [eth_minimum]: A user must submit a wallet that contains a minimum amount of Ethereum in order for the wallet to be submitted. This is usually used to stop fake wallets / bots from being submitting.
- remove_on_leave: Whether or not to remove a users wallet if they leave the server.
- whitelist_log: Choose a channel where logs are sent when a user gets the [required_role]
- wallet_log: Choose a channel where submitted wallets are logged

### Example Usage

- If you’re choosing “Ethereum”, you can set “ethereum_minimum”
- If you’re setting “og_role” you can set “og_amount”
- If you want to skip any option, don’t select it. You can backspace and delete that setting

:::info
Image goes here
:::

### Sending a panel

Using the `/panel send` command, you can send a panel to a specific channel for users to submit their wallet. The panel sends as an embed in which you can customize the title, description and thumbnail image for the embed. There will be 2 buttons attached to the sent message, a “Submit” and “Check” button. 

```go
/panel send: <id> <channel> <title> <description> [thumbnail]
```

Mandatory:

- id: Choose a panel to be sent that you created via the `/panel create` command.
- channel: The channel where the panel gets sent to
- title: Set the title of the embed
- description: Set the description of the embed

Optional

- thumbnail: Set the thumbnail image of the embed

### Example Usage

#### Viewing & Editing a Panel

By using the `/panel view` command, you can view the current settings of each panel. You can edit any of these settings using the `/panel edit` command. Please note you can not edit the Name/ID of the panel, nor the crypto. 

#### Deleting a panel

You can use the `/panel delete` command to delete a panel completely. Once a panel is deleted it can not be restored. 

