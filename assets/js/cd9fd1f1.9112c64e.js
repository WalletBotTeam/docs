"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[587],{3905:(e,t,l)=>{l.d(t,{Zo:()=>m,kt:()=>d});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},m=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=u(l),d=r,h=p["".concat(s,".").concat(d)]||p[d]||c[d]||n;return l?a.createElement(h,i(i({ref:t},m),{},{components:l})):a.createElement(h,i({ref:t},m))}));function d(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=l[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}p.displayName="MDXCreateElement"},4876:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=l(7462),r=(l(7294),l(3905));const n={},i="Wallet & Whitelist Manager roles",o={unversionedId:"02 Setting up/Wallet & Whitelist Manager",id:"02 Setting up/Wallet & Whitelist Manager",title:"Wallet & Whitelist Manager roles",description:"Allowing specfic roles to manage wallets, whitelists and collab whitelists. You must set these roles in order to use any of the /wallet or /whitelist commands.",source:"@site/docs/02 Setting up/03-Wallet & Whitelist Manager.md",sourceDirName:"02 Setting up",slug:"/02 Setting up/Wallet & Whitelist Manager",permalink:"/02 Setting up/Wallet & Whitelist Manager",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Wallet Collection & Logging",permalink:"/02 Setting up/Wallet Collection & Logging"},next:{title:"Whitelist Notifications",permalink:"/02 Setting up/Whitelist Notifications"}},s={},u=[{value:"Wallet Manager",id:"wallet-manager",level:2},{value:"Wallet Commands",id:"wallet-commands",level:3},{value:"Wallet add",id:"wallet-add",level:4},{value:"Wallet remove",id:"wallet-remove",level:4},{value:"Wallet check",id:"wallet-check",level:4},{value:"Whitelist Manager",id:"whitelist-manager",level:2},{value:"Whitelist commands (for staff)",id:"whitelist-commands-for-staff",level:3},{value:"Whitelist add",id:"whitelist-add",level:4},{value:"Whitelist remove",id:"whitelist-remove",level:4},{value:"Collab Manager",id:"collab-manager",level:2}],m={toc:u};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wallet--whitelist-manager-roles"},"Wallet & Whitelist Manager roles"),(0,r.kt)("p",null,"Allowing specfic roles to manage wallets, whitelists and collab whitelists. You must set these roles in order to use any of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/wallet")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"/whitelist")," commands. "),(0,r.kt)("p",null,"For each Manager command it is recommneded to create ",(0,r.kt)("strong",{parentName:"p"},"seperate roles"),' instead of using a general "Staff" role. Create a "Wallet Manager", "Whitelist Manager", and "Collab Manager" role. The hierarchy of this role does not matter and you can also clear all permissions on this role.'),(0,r.kt)("h2",{id:"wallet-manager"},"Wallet Manager"),(0,r.kt)("p",null,"The Wallet Manager can use any of the ",(0,r.kt)("inlineCode",{parentName:"p"},"/wallet ...")," command to ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," , ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"check")," the wallet of other users along with allowing them to ",(0,r.kt)("inlineCode",{parentName:"p"},"export")," wallets collected by panels"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/config wallet_manager <role>\n")),(0,r.kt)("h3",{id:"wallet-commands"},"Wallet Commands"),(0,r.kt)("p",null,"These commands allow the Wallet Managers to ",(0,r.kt)("inlineCode",{parentName:"p"},"add")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"remove")," wallets on the behalf of other users for ",(0,r.kt)("strong",{parentName:"p"},"all")," panels. Wallet Managers can also check the submitted wallet of a user for a specfic panel."),(0,r.kt)("h4",{id:"wallet-add"},"Wallet add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/wallet add: <id> <user> <wallet> \n")),(0,r.kt)("p",null,"Mandetory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id: Which panel is the users wallet being added to"),(0,r.kt)("li",{parentName:"ul"},"user: The users wallet address"),(0,r.kt)("li",{parentName:"ul"},"wallet: The wallet address of the user")),(0,r.kt)("h4",{id:"wallet-remove"},"Wallet remove"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/wallet remove: <id> <user> \n")),(0,r.kt)("p",null,"Mandetory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id: Which panel to remove the users wallet from"),(0,r.kt)("li",{parentName:"ul"},"user: Which users wallet to remove")),(0,r.kt)("h4",{id:"wallet-check"},"Wallet check"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/wallet check: <id> <user> \n")),(0,r.kt)("p",null,"Mandetory"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id: Which panel to check for the wallet"),(0,r.kt)("li",{parentName:"ul"},"user: Which users to wallet address to check")),(0,r.kt)("h2",{id:"whitelist-manager"},"Whitelist Manager"),(0,r.kt)("p",null,'The whitelist manager role allows your staff members to assign and remove the Whitelist role (required_role in panels) to users without having the "Manage Roles" permission.  This is great as you don\'t have to worry about your staff team abusing manage role permissions in case the account is compromised.'),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"you must configure the whitelist_manager role in order to use the whitelist commands")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/config whitelist_manager <role>\n")),(0,r.kt)("h3",{id:"whitelist-commands-for-staff"},"Whitelist commands (for staff)"),(0,r.kt)("p",null,"Any users with the whitelist_manager role can assign the required_role/whitelist role of a panel to a member. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},'The "whitelist role" is the "required_role". The Panel is used to identify which "whitelist role" to assign')),(0,r.kt)("h4",{id:"whitelist-add"},"Whitelist add"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/whitelist add: <user> <panel>\n")),(0,r.kt)("p",null,"Mandetory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"user: which user to give the required_role to"),(0,r.kt)("li",{parentName:"ul"},"panel: which required_role to assign to the user")),(0,r.kt)("h4",{id:"whitelist-remove"},"Whitelist remove"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/whitelist remove: <user> <panel>\n")),(0,r.kt)("p",null,"Mandetory:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"user: which user to remove the required_role from"),(0,r.kt)("li",{parentName:"ul"},"panel: which required_role to remove from the user")),(0,r.kt)("h2",{id:"collab-manager"},"Collab Manager"),(0,r.kt)("p",null,"The Collab Manager can confgure the auto-whitelists. This is usually given to trusted collab managers only as WalletBot would mass-assign the whitelist role to all of the users mentioned. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"/config collab_manager: <role>\n")))}c.isMDXComponent=!0}}]);