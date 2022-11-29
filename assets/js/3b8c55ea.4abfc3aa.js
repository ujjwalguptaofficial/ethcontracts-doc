"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},c="Installation",i={unversionedId:"installation",id:"installation",title:"Installation",description:"You need to install two package",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/ethcontracts-doc/docs/installation",draft:!1,editUrl:"https://github.com/ujjwalguptaofficial/ethcontracts-doc/tree/main/docs/installation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Get started",permalink:"/ethcontracts-doc/docs/get-started"},next:{title:"Contracts",permalink:"/ethcontracts-doc/docs/category/contracts"}},l={},s=[{value:"1. Core package",id:"1-core-package",level:2},{value:"2. Client package",id:"2-client-package",level:2},{value:"ethers",id:"ethers",level:3},{value:"web3js",id:"web3js",level:3}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You need to install two package"),(0,a.kt)("h2",{id:"1-core-package"},"1. Core package"),(0,a.kt)("p",null,"core package contains all the contracts and core implementation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i @ethcontracts/core\n")),(0,a.kt)("h2",{id:"2-client-package"},"2. Client package"),(0,a.kt)("p",null,"Client package is a client wrapper for ethereum libraries like ",(0,a.kt)("strong",{parentName:"p"},"ethers.js")," and ",(0,a.kt)("strong",{parentName:"p"},"web3.js"),". This allows you to use any of your favourite package."),(0,a.kt)("h3",{id:"ethers"},"ethers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i @ethcontracts/ethers\n")),(0,a.kt)("h3",{id:"web3js"},"web3js"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm i @ethcontracts/web3\n")))}u.isMDXComponent=!0}}]);