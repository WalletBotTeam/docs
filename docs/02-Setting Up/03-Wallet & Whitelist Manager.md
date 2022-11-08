# Wallet & Whitelist Manager roles

Allowing specfic roles to manage wallets, whitelists and collab whitelists. You must set these roles in order to use any of the `/wallet` or `/whitelist` commands. 

For each Manager command it is recommneded to create **seperate roles** instead of using a general "Staff" role. Create a "Wallet Manager", "Whitelist Manager", and "Collab Manager" role. The hierarchy of this role does not matter and you can also clear all permissions on this role.

## Wallet Manager

The Wallet Manager can use any of the `/wallet ...` command to `add` , `remove` or `check` the wallet of other users along with allowing them to `export` wallets collected by panels

```go
/config wallet_manager <role>
```

### Wallet Commands

These commands allow the Wallet Managers to `add` and `remove` wallets on the behalf of other users for **all** panels. Wallet Managers can also check the submitted wallet of a user for a specfic panel.

#### Wallet add

```go
/wallet add: <id> <user> <wallet> 
```

Mandatory:

- id: Which panel is the users wallet being added to
- user: The users wallet address
- wallet: The wallet address of the user

#### Wallet remove
```go
/wallet remove: <id> <user> 
```

Mandatory:

- id: Which panel to remove the users wallet from
- user: Which users wallet to remove

#### Wallet check
```go
/wallet check: <id> <user> 
```

Mandatory

- id: Which panel to check for the wallet
- user: Which users to wallet address to check

## Whitelist Manager

The whitelist manager role allows your staff members to assign and remove the Whitelist role (required_role in panels) to users without having the "Manage Roles" permission.  This is great as you don't have to worry about your staff team abusing manage role permissions in case the account is compromised.

:::warning
you must configure the whitelist_manager role in order to use the whitelist commands
:::

```go
/config whitelist_manager <role>
```

### Whitelist commands (for staff)
Any users with the whitelist_manager role can assign the required_role/whitelist role of a panel to a member. 

:::info
The "whitelist role" is the "required_role". The Panel is used to identify which "whitelist role" to assign
:::

#### Whitelist add
```go
/whitelist add: <user> <panel>
```

Mandatory:
- user: which user to give the required_role to
- panel: which required_role to assign to the user

#### Whitelist remove
```go
/whitelist remove: <user> <panel>
```

Mandatory:
- user: which user to remove the required_role from
- panel: which required_role to remove from the user

## Collab Manager

The Collab Manager can confgure the auto-whitelists. This is usually given to trusted collab managers only as WalletBot would mass-assign the whitelist role to all of the users mentioned. 

```go
/config collab_manager: <role>
```

