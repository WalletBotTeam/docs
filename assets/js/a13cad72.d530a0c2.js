"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[238],{9334:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(7294),a=n(196);const s="section_zm0u";const r=function(){const[e,t]=(0,l.useState)(!0),[n,r]=(0,l.useState)([]);(0,l.useEffect)((()=>{m().then((e=>{r(e)})).finally((()=>{t(!1)}))}),[]);const m=async()=>{try{return(await a.ZP.get("https://api.walletbot.pro/v0/commands")).data}catch(e){return[]}};return e?l.createElement("div",{className:s},l.createElement("h1",null,"Loading ...")):l.createElement("section",{className:s},l.createElement("h1",null,"All Commands"),l.createElement("h2",null,"This data is sourced directly from the live bot."),l.createElement("br",null),n.map((e=>l.createElement(l.Fragment,null,l.createElement("h3",null,e.name),l.createElement("h5",null,e.description),l.createElement("p",null,"Accessible by:"," ",e.collabManager?"Collab Managers":e.walletManager?"Wallet Managers":e.whitelistManager?"Whitelist Managers":e.permissions.length>0?"People with the "+e.permissions.join(" and ")+" perms":"Anyone"),l.createElement("p",null,"Subcommands:"," ",e.subcommands.length>0?e.subcommands.map((t=>l.createElement(l.Fragment,null,l.createElement("br",null),l.createElement("code",null,"/",e.name," ",t)))):"None"),l.createElement("hr",null)))))};var m=n(215);const c=function(){return l.createElement(m.Z,{title:"Commands",description:"See the master list of commands and permissions straight from the bot"},l.createElement("main",null,l.createElement(r,null)))}}}]);