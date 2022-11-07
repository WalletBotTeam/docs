These utility functions are free to use for everyone. 

## Get Usernames / Get IDs

{filler for autowhitelist when other servers add the bot}

This Right Click command allows you to get all IDs and Usernames of users mentioned in a message. This can be useful especially when you have a giveaway bot that annouces many winners and you can instantly get a list of all the people mentioned for other purposes.

``` 
Right click a message —> Apps —> Get IDs / Usernames 
```

The bot will output an empemeral message (visible only to you) with the list of users along with that same list in a hastebin link.

:::info
This is very useful when other servers also use WalletBot and can easily import users for the `auto-whitelist` function. 
:::
## Dump Reactions

Get a list of users who reacted to a message and which reactions.

```go
/dump reactions <link>
```

- link: the message link.


## Dump role

Get a list of users who have a specfic role

```go
/dump role <role>
```

- role: The role you want the list of users for.