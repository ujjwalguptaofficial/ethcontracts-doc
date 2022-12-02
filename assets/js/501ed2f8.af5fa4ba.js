"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[7954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3,keywords:["erc1155","smart contracts","ethereum","polygon"]},s="ERC1155",c={unversionedId:"contracts/erc1155",id:"contracts/erc1155",title:"ERC1155",description:"You can interact with erc1155 token by creating instance of class ERC1155. ERC1155 class contains all different methods required for standard erc1155 contract.",source:"@site/docs/contracts/erc1155.md",sourceDirName:"contracts",slug:"/contracts/erc1155",permalink:"/ethcontracts-doc/docs/contracts/erc1155",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/ethcontracts-doc/tree/main/docs/contracts/erc1155.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,keywords:["erc1155","smart contracts","ethereum","polygon"]},sidebar:"tutorialSidebar",previous:{title:"ERC721 Burnable",permalink:"/ethcontracts-doc/docs/contracts/erc721/erc721-burnable"},next:{title:"Concepts",permalink:"/ethcontracts-doc/docs/category/concepts"}},i={},l=[{value:"init",id:"init",level:2},{value:"ethers.js",id:"ethersjs",level:3},{value:"web3.js",id:"web3js",level:3},{value:"getTokenCount",id:"gettokencount",level:2},{value:"getTokenCountForMany",id:"gettokencountformany",level:2},{value:"isApprovedForAll",id:"isapprovedforall",level:2},{value:"isInterfaceSupported",id:"isinterfacesupported",level:2},{value:"setApprovalForAll",id:"setapprovalforall",level:2},{value:"safeTransferFrom",id:"safetransferfrom",level:2},{value:"safeBatchTransferFrom",id:"safebatchtransferfrom",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"erc1155"},"ERC1155"),(0,a.kt)("p",null,"You can interact with ",(0,a.kt)("strong",{parentName:"p"},"erc1155 token")," by creating instance of class ",(0,a.kt)("inlineCode",{parentName:"p"},"ERC1155"),". ERC1155 class contains all different methods required for standard ",(0,a.kt)("strong",{parentName:"p"},"erc1155")," contract."),(0,a.kt)("p",null,"ERC1155 instance can be created by passing token address in constructor. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import { ERC1155 } from "@ethcontracts/core";\n\nconst token = new ERC1155(<tokenAddress>);\n')),(0,a.kt)("h2",{id:"init"},"init"),(0,a.kt)("p",null,"initiate token with provider."),(0,a.kt)("h3",{id:"ethersjs"},"ethers.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import { ERC1155 } from "@ethcontracts/core";\nimport { EthersClient } from "@ethcontracts/ethers";\nawait token.init(new EthersClient(<wallet provider>));\n')),(0,a.kt)("h3",{id:"web3js"},"web3.js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import { ERC1155 } from "@ethcontracts/core";\nimport { Web3Client } from "@ethcontracts/web3";\nawait token.init(new Web3Client(<wallet provider>));\n')),(0,a.kt)("h2",{id:"gettokencount"},"getTokenCount"),(0,a.kt)("p",null,"getTokenCount can be used to get the token count of a user for a particular ",(0,a.kt)("inlineCode",{parentName:"p"},"erc1155")," token id. It internally calls ",(0,a.kt)("inlineCode",{parentName:"p"},"balanceOf")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const count =  await token.getTokenCount(<userAddress>,<token id>);\n")),(0,a.kt)("h2",{id:"gettokencountformany"},"getTokenCountForMany"),(0,a.kt)("p",null,"getTokenCountForMany can be used to get the token count of multiple user for a particular ",(0,a.kt)("inlineCode",{parentName:"p"},"erc1155")," token id. It internally calls ",(0,a.kt)("inlineCode",{parentName:"p"},"balanceOfBatch")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const count =  await token.getTokenCountForMany(<userAddress[]>,<token id[]>);\n")),(0,a.kt)("h2",{id:"isapprovedforall"},"isApprovedForAll"),(0,a.kt)("p",null,"check if spender is approved for all NFT of a user "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const isApproved = await token.isApprovedForAll(owner, operator);\n")),(0,a.kt)("h2",{id:"isinterfacesupported"},"isInterfaceSupported"),(0,a.kt)("p",null,"check if an interface is supported"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const isApproved = await token.isInterfaceSupported(interfaceId);\n")),(0,a.kt)("h2",{id:"setapprovalforall"},"setApprovalForAll"),(0,a.kt)("p",null,"setApprovalForAll method approves a spender for all tokens of a user. The last parameter is boolean value - so you can pass true or false to approve or remove approval."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"token.setApprovalForAll(<spenderAddress>, <approved:boolean>);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = token.setApprovalForAll(<spenderAddress>, true);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,a.kt)("h2",{id:"safetransferfrom"},"safeTransferFrom"),(0,a.kt)("p",null,"safeTransferFrom method can be used to transfer amount of a token to another user by a spender or owner."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = token.safeTransferFrom(<fromAddress>,<toAddress>, <tokenId>, <amount>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,a.kt)("p",null,"\ud83d\udc49 You can also pass additional data as per ",(0,a.kt)("inlineCode",{parentName:"p"},"erc1155 standard")," but its optional and internally we handle this to pass empty value as default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = token.safeTransferFrom(<fromAddress>,<toAddress>, <tokenId>, <amount>, <data>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,a.kt)("h2",{id:"safebatchtransferfrom"},"safeBatchTransferFrom"),(0,a.kt)("p",null,"safeBatchTransferFrom method can be used to transfer multiple tokens with multiple amounts  to another user by a spender or owner. It is similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"safeTransferFrom")," but allows to do batch operations."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"const [getTransactionHash, getTransactionReceipt] = token.safeTransferFrom(<fromAddress>,<toAddress>, <tokenIds[]>, <amounts[]>, <data?>);\n\nconst txhash = await getTransactionHash();\nconst txReceipt = await getTransactionReceipt();\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"data")," parameter is optional - you can leave it or pass null value."))}d.isMDXComponent=!0}}]);