"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,l={unversionedId:"Setting Up/Utility Functions",id:"Setting Up/Utility Functions",title:"Utility Functions",description:"These utility functions are free to use for everyone.",source:"@site/docs/02-Setting Up/05-Utility Functions.md",sourceDirName:"02-Setting Up",slug:"/Setting Up/Utility Functions",permalink:"/Setting Up/Utility Functions",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Whitelist Notifications",permalink:"/Setting Up/Whitelist Notifications"},next:{title:"Using WalletBot with Wick and other security bots",permalink:"/Using WalletBot with Wick and other security bots"}},s={},u=[{value:"Get Usernames / Get IDs",id:"get-usernames--get-ids",level:2},{value:"Dump Reactions",id:"dump-reactions",level:2},{value:"Dump role",id:"dump-role",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"These utility functions are free to use for everyone. "),(0,i.kt)("h2",{id:"get-usernames--get-ids"},"Get Usernames / Get IDs"),(0,i.kt)("p",null,"{filler for autowhitelist when other servers add the bot}"),(0,i.kt)("p",null,"This Right Click command allows you to get all IDs and Usernames of users mentioned in a message. This can be useful especially when you have a giveaway bot that annouces many winners and you can instantly get a list of all the people mentioned for other purposes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Right click a message \u2014> Apps \u2014> Get IDs / Usernames \n")),(0,i.kt)("p",null,"The bot will output an empemeral message (visible only to you) with the list of users along with that same list in a hastebin link."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This is very useful when other servers also use WalletBot and can easily import users for the ",(0,i.kt)("inlineCode",{parentName:"p"},"auto-whitelist")," function. ")),(0,i.kt)("h2",{id:"dump-reactions"},"Dump Reactions"),(0,i.kt)("p",null,"Get a list of users who reacted to a message and which reactions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"/dump reactions <link>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"link: the message link.")),(0,i.kt)("h2",{id:"dump-role"},"Dump role"),(0,i.kt)("p",null,"Get a list of users who have a specfic role"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"/dump role <role>\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"role: The role you want the list of users for.")))}p.isMDXComponent=!0}}]);