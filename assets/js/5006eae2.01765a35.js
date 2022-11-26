"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[269],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3004:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:1},c="ERC20",l={unversionedId:"contracts/erc20",id:"contracts/erc20",title:"ERC20",description:"ERC20 is a class which contains all different methods required for standard erc20 contract.",source:"@site/docs/contracts/erc20.md",sourceDirName:"contracts",slug:"/contracts/erc20",permalink:"/ethcontracts-doc/docs/contracts/erc20",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/ethcontracts-doc/tree/main/docs/contracts/erc20.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Contracts",permalink:"/ethcontracts-doc/docs/category/contracts"},next:{title:"ERC721",permalink:"/ethcontracts-doc/docs/contracts/erc721"}},s={},i=[{value:"init",id:"init",level:2},{value:"ethers.js",id:"ethersjs",level:3},{value:"web3.js",id:"web3js",level:3},{value:"getName",id:"getname",level:2},{value:"getDecimals",id:"getdecimals",level:2},{value:"getSymbol",id:"getsymbol",level:2},{value:"getBalance",id:"getbalance",level:2},{value:"getTotalSupply",id:"gettotalsupply",level:2},{value:"getAllowance",id:"getallowance",level:2},{value:"approve",id:"approve",level:2},{value:"transfer",id:"transfer",level:2},{value:"transferFrom",id:"transferfrom",level:2},{value:"increaseAllowance",id:"increaseallowance",level:2},{value:"decreaseAllowance",id:"decreaseallowance",level:2}],p={toc:i};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"erc20"},"ERC20"),(0,r.kt)("p",null,"ERC20 is a class which contains all different methods required for standard ",(0,r.kt)("strong",{parentName:"p"},"erc20")," contract."),(0,r.kt)("p",null,"ERC20 instance can be created by passing token address in constructor. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { ERC20 } from "@opweb3/ethcontracts";\n\nconst token = new ERC20(<tokenAddress>);\n')),(0,r.kt)("h2",{id:"init"},"init"),(0,r.kt)("p",null,"initiate token with provider."),(0,r.kt)("h3",{id:"ethersjs"},"ethers.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { EthersClient, ERC20 } from "@opweb3/ethcontracts";\nawait token.init(new EthersClient(<wallet provider>));\n')),(0,r.kt)("h3",{id:"web3js"},"web3.js"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { Web3Client, ERC20 } from "@opweb3/ethcontracts";\nawait token.init(new Web3Client(<wallet provider>));\n')),(0,r.kt)("p",null,"you can call init multiple times with different provider. This allows you to use the same token instance in multichain dapp."),(0,r.kt)("h2",{id:"getname"},"getName"),(0,r.kt)("p",null,"getName returns the name of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const tokenName = await token.getName();\n")),(0,r.kt)("h2",{id:"getdecimals"},"getDecimals"),(0,r.kt)("p",null,"getDecimals returns the decimals of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const tokenDecimal = await token.getDecimals();\n")),(0,r.kt)("h2",{id:"getsymbol"},"getSymbol"),(0,r.kt)("p",null,"getSymbol returns the symbol of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const symbol = await token.getSymbol();\n")),(0,r.kt)("h2",{id:"getbalance"},"getBalance"),(0,r.kt)("p",null,"getBalance returns the balance of a user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const tokenBalance =  await token.getBalance(<userAddress>);\n")),(0,r.kt)("h2",{id:"gettotalsupply"},"getTotalSupply"),(0,r.kt)("p",null,"getTotalSupply returns the total supply of the token."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const totalSupply = await token.getTotalSupply();\n")),(0,r.kt)("h2",{id:"getallowance"},"getAllowance"),(0,r.kt)("p",null,"getAllowance returns the allowance of a spender for a user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const allowance = await token.getAllowance(<owner>, <spender>);\n")),(0,r.kt)("h2",{id:"approve"},"approve"),(0,r.kt)("p",null,"approve method approves the allowance of a spender for the current user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = await token.approve(<spenderAddress>, <amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,r.kt)("h2",{id:"transfer"},"transfer"),(0,r.kt)("p",null,"transfer method can be used to transfer amount to another user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = await token.transfer(<toAddress>, <amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,r.kt)("h2",{id:"transferfrom"},"transferFrom"),(0,r.kt)("p",null,"transferFrom method can be used to transfer amount to another user by a spender or owner."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = await token.transferFrom(<fromAddress>,<toAddress>, <amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,r.kt)("h2",{id:"increaseallowance"},"increaseAllowance"),(0,r.kt)("p",null,"increaseAllowance method can be used to increase the allowance of a spender."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = await token.increaseAllowance(<spenderAddress>, <amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,r.kt)("h2",{id:"decreaseallowance"},"decreaseAllowance"),(0,r.kt)("p",null,"decreaseAllowance method can be used to decrease the allowance of a spender."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = await token.decreaseAllowance(<spenderAddress>, <amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")))}d.isMDXComponent=!0}}]);