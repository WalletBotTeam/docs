Collecting and exporting user wallets is made super easy with high customisability. Users can submit their wallet by click the submit button on the panel message. You can preset requirements to panels so only users who meet the conditions will be able to submit their wallet.

## Panels 

Panels are used to collect wallet addresses from whitelisted users. Panels can be created by admins with ease by using the `/slash commands`. There's a lot of customsation options when creating a panel which are shown below. Collected wallets in a panel can be exported as a txt, json, or csv file type. All panel relaated commands start with `/panel`

### Panel Create

Start by using the `/panel create` command. As soon as you type that, you will see the slash commands menu pop up, select the `panel create` command and follow along with the auto-complete. 

:::Info
Panel commands can only be used by users with Administrator permissions
:::

#### Syntax
```go
/panel create: <Name> <Crypto> [required_role] [completed_role] [og_role] 
[og_amount] [eth_minimum] [remove_on_leave] [whitelist_log] [wallet_log]
```

**Mandatory**: Can't be edited later!
- Name: A name for the panel. This name is not displayed when the panel is sent, there is moreso for internal naming and usage
- Crypto: Select ETH, SOL, or Other. We are able to validiate wallet addresses for ETH and SOL, so in case a user submits a wrong address, they will get an error asking them to check again.

**Optional**: Can be edited via `/panel edit`
- Required_role: This is the role a user **needs** in order to submit your wallet. If a user does not have this role, they will not be able to submit their wallet. This role is usually called `@Whitelist` but you can call it whatever you want. You can also set it to `@everyone` to allow anyone to submit their wallet
- completed_role: A role to assign **after** a user has submited their wallet. Used to disguish between users who have submited their wallet and those who have not.
- og_role: The OG role is used to give the first X amount of people a role for submiting their wallet.
- og_amount: The amount of users you want to have the og_role. This role is assigned on a first come first serve basis
- eth_minimum: A user must submit a wallet that contains a mimimum amount of etherium in order for the wallet to be submitted. This is usually used to stop fake wallets / bots from being submitting.
- remove_on_leave: Whether or not to remove a users wallet if they leave the server.
- whitelist_log: Choose a channel where logs are sent when users get / lose the required_role
- wallet_log: Choose a channel where submitted wallets are logged

#### Example Usage

![Example](https://i.imgur.com/jT2yRuz.png)

- If you’re choosing “Ethereum”, you can set “ethereum_minimum”
- If you’re setting “og_role” you can set “og_amount”
- If you want to skip any option, don’t select it. You can backspace and delete that setting

### Panel Send

Using the `/panel send` command, you can send a panel message to a specfic channel for users to submit their wallet. The messsage will contain an embed along with 2 buttons at the bottom, "submit" and "check". Whitelisted users will be able to submit their wallet and check which wallet they have submitted. Users without the whitelisted role will get an emphermal error message indicated that they don't have the required role to submit their wallet.

#### Syntax

```go
/panel send: <id> <channel>
```

Mandatory:
- id: Choose a panel to be sent that you created via the `/panel create` command.
- channel: The channel where the panel gets sent to

After using the command, a modal will pop up where you can set the Title, Description and an optional thumbnail image

#### Example Usage
![Example](https://i.imgur.com/HrTlV40.gif)

### Panel View

By using the `/panel view` command, you can see the current configeration of a panel. 

#### Syntax
```go
/panel view: <id>
```

#### Example usage
![example](https://i.imgur.com/hUPOAWC.png)

### Panel Edit

You can edit any of these settings using the `/panel edit` command. Please note you can not edit the Name/ID of the panel, nor the crypto. 

#### Syntax 
```go
/panel edit: [required_role] [completed_role] [og_role] 
[og_amount] [eth_minimum] [remove_on_leave] [whitelist_log] [wallet_log]
```

You can edit any of the settings shown above. 

#### Example usage
![example](https://i.imgur.com/R2DapHV.png)

You can view the changes made by using the `/panel view` command.

### Panel Delete

You can use the `/panel delete` command to delete a panel completely. Once a panel is deleted it can not be restored. We _may_ have the data of a panel stored for a short amount of time, so if it needs to be recovered, we might be able to do so. Please join the support server for more info.

![image](https://i.imgur.com/gsOQ1Rg.png)

![image](https://i.imgur.com/kvsn45O.png)
