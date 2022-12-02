"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[1861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=o,m=b["".concat(i,".").concat(d)]||b[d]||p[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},3802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,keywords:["erc20","burnable","smart contracts","ethereum","polygon"]},c="ERC20 Burnable",s={unversionedId:"contracts/erc20/burnable",id:"contracts/erc20/burnable",title:"ERC20 Burnable",description:"ERC20 Burnable is an extension of ERC20 which has some additional methods related to burn. It contains all methods of ERC20.",source:"@site/docs/contracts/erc20/burnable.md",sourceDirName:"contracts/erc20",slug:"/contracts/erc20/burnable",permalink:"/ethcontracts-doc/docs/contracts/erc20/burnable",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/ethcontracts-doc/tree/main/docs/contracts/erc20/burnable.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,keywords:["erc20","burnable","smart contracts","ethereum","polygon"]},sidebar:"tutorialSidebar",previous:{title:"ERC20",permalink:"/ethcontracts-doc/docs/contracts/erc20/"},next:{title:"ERC721",permalink:"/ethcontracts-doc/docs/contracts/erc721/"}},i={},l=[{value:"burn",id:"burn",level:2},{value:"burnFrom",id:"burnfrom",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"erc20-burnable"},"ERC20 Burnable"),(0,o.kt)("p",null,"ERC20 Burnable is an extension of ERC20 which has some additional methods related to ",(0,o.kt)("strong",{parentName:"p"},"burn"),". It contains all methods of ERC20."),(0,o.kt)("p",null,"Similar to ERC20 - you can interact with ERC20 Burnable token by creating instance of class ",(0,o.kt)("inlineCode",{parentName:"p"},"ERC20Burnable"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { ERC20Burnable } from "@ethcontracts/core";\n\nconst token = new ERC20Burnable(<tokenAddress>);\n')),(0,o.kt)("h2",{id:"burn"},"burn"),(0,o.kt)("p",null,"burn method can be used to burn the amount of token of the caller account."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = token.burn(<amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,o.kt)("h2",{id:"burnfrom"},"burnFrom"),(0,o.kt)("p",null,"burnFrom method can be used to burn the amount of token of an user account by the spender."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = token.burnFrom(<userAddress>, <amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")))}p.isMDXComponent=!0}}]);