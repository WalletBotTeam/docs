"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var a=i.createContext({}),c=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(a.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),d=n,m=p["".concat(a,".").concat(d)]||p[d]||h[d]||o;return r?i.createElement(m,l(l({ref:t},u),{},{components:r})):i.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1,slug:"/"},l="Welcome to WalletBot!",s={unversionedId:"intro",id:"intro",title:"Welcome to WalletBot!",description:"Introduction",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar"},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"1) Wallet Collection for Whitelisted users",id:"1-wallet-collection-for-whitelisted-users",level:3},{value:"2) Auto-whitelist / Collab White list",id:"2-auto-whitelist--collab-white-list",level:3},{value:"3) Whitelist Notification to User",id:"3-whitelist-notification-to-user",level:3},{value:"4) Whitelist &amp; Wallet Logging",id:"4-whitelist--wallet-logging",level:3}],u={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"welcome-to-walletbot"},"Welcome to WalletBot!"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"The bot is a cumulation of some existing features from other over priced bots (with improvements), and some brand new, unique features. The bot has 4 Main features which all complement each other:"),(0,n.kt)("h3",{id:"1-wallet-collection-for-whitelisted-users"},"1) Wallet Collection for Whitelisted users"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* Only users with certain roles can submit wallets\n* Multiple Panels & Crypto currencies support (ETH, SOL, etc.)\n* Minimum Crypto balance to submit wallet\n* Each panel is independent and can have specific requirements.\n* Give role to users after they\u2019ve submitted\n* OG Role for first X wallet submitters\n* Auto-remove wallets if user leaves the server\n")),(0,n.kt)("h3",{id:"2-auto-whitelist--collab-white-list"},"2) Auto-whitelist / Collab White list"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* Easiest way to manage Collabs, no more \u201copen ticket to claim `Whitelist` role\u201d\n* Automatically assign the whitelisted to specific users when they join the server\n* Auto-whitelist respects Discord\u2019s Rules Screening & any verification you have setup with bots. (so users don\u2019t get the `@whitelist` without verifying)\n* Assign an additional specific role for each \u201cauto-whitelist\u201d\n* Force run any \u201cauto-whitelist\u201d to add roles to users already in the server\n* Get stats for each auto-whitelist: How many auto-whitelisted members joined the server, left the server, in the server but pending verification\n* Manage Multiple \u201cauto-whitelists\u201d without anyone ever needing to open a ticket to claim the WL role\n")),(0,n.kt)("h3",{id:"3-whitelist-notification-to-user"},"3) Whitelist Notification to User"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* Informing the user that they\u2019ve received the WL role and can submit their wallet\n* No more random \u201crole check\u201d messages in chats\n* Pinging with a message in a specific channel\n* Ghost pinging users in the `#submit-wallet` channel (so they can see where to submit their wallet)\n* Direct Messaging users that they can submit their wallet and an optional message for them to close their DMs and how to close their DMs [CUSTOM BOT ONLY]\n")),(0,n.kt)("h3",{id:"4-whitelist--wallet-logging"},"4) Whitelist & Wallet Logging"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"* Whitelist role logs for seeing when and how users got the Whitelisted role (Assigned by a Staff Member, by which Auto-whitelist or by another bot)\n* Whitelist role logs also logs when the Whitelist role is removed from users. (Removed by a staff member, another bot, or user left the server)\n* Wallet Logs for seeing the wallet submissions in real real time. Gives information such as their wallet address, current crypto balance, link to ETHERSCAN.\n* Wallet logs also show when a users wallet was removed from a Panel due to the wallet being removed by staff member, or if the user left the server.\n")),(0,n.kt)("p",null,"Each feature works in conjunction with the other. It is advised to set up all features, besides \u201cauto-whitelist\u201d if you don\u2019t need it."))}h.isMDXComponent=!0}}]);