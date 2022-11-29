---
sidebar_position: 1
---

# Get started

In this get started tutorial - we will learn how to install, setup and interact with contract api. 

## Installation

You need to install two package

### 1. Core package

core package contains all the contracts and core implementation

```
npm i @ethcontracts/core
```

### 2. Client package

Client package is a client wrapper for ethereum libraries like **ethers.js** and **web3.js**. This allows you to use any of your favourite package.

#### ethers

```
npm i @ethcontracts/ethers
```
#### web3js

```
npm i @ethcontracts/web3
```

## Setup

You can use any ethereum library. Currently we support ethers and web3.js.
### ethers

```
import { EthersClient } from "@ethcontracts/ethers";
```

### web3js

```
import { Web3Client } from "@ethcontracts/web3";
```

## ERC20 balance

Let's see how we can get balance of an erc20 token.

### ethers.js

```
import { ERC20 } from "@ethcontracts/core";
import { EthersClient } from "@ethcontracts/ethers";
import { providers } from "ethers"

// create token with token address
const token = new ERC20("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063");

// create provider
const provider = new providers.JsonRpcProvider('https://polygon-rpc.com');

// initiate token with provider
await token.init(
    new EthersClient(provider)
);

// call token balance api

const balance = await token.getBalance("0xd5D3F35Bdd08950CCFE0DeAb638F8B5498297076");
console.log("balance", balance);
```

### web3.js

```
import { ERC20 } from "@ethcontracts/core";
import { Web3Client } from "@ethcontracts/web3";
import Web3 from "web3";

// create token with token address
const token = new ERC20("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063");

// create provider
const provider = new Web3.providers.HttpProvider('https://polygon-rpc.com');

// initiate token with provider
await token.init(
    new Web3Client(provider)
);

// call token balance api

const balance = await token.getBalance("0xd5D3F35Bdd08950CCFE0DeAb638F8B5498297076");
console.log("balance", balance);
```

## transfer

`transfer` is standard ERC20 method which allows to transfer fund from user account to another user. 

It is write transaction which means it changes the state in blockchain transaction. In case of write transaction - we need transaction Hash and transaction receipt.

### ethers.js

```
import { ERC20 } from "@ethcontracts/core";
import { EthersClient } from "@ethcontracts/ethers";
import { providers } from "ethers"

// create token with token address
const token = new ERC20("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063");

// create provider - make sure its wallet provider like metamask, walletconnect etc as its needed to write tx on blockchain
const provider = <wallet provider>;

// initiate token with provider
await token.init(
    new EthersClient(provider)
);

// call transfer api

const toAddress = "0xd5D3F35Bdd08950CCFE0DeAb638F8B5498297076";
const [getTransactionHash, getTransactionReceipt] = token.transfer(toAddress,10000);

// get transaction hash

const txHash = await getTransactionHash();

// get tx receipt
const txReceipt = await getTransactionReceipt();

```

### web3.js

```
import { ERC20 } from "@ethcontracts/core";
import { Web3Client } from "@ethcontracts/web3";
import Web3 from "web3";

// create token with token address
const token = new ERC20("0x8f3cf7ad23cd3cadbd9735aff958023239c6a063");

// create provider - make sure its wallet provider like metamask, walletconnect etc as its needed to write tx on blockchain
const provider = <wallet provider>;

// initiate token with provider
await token.init(
    new Web3Client(provider)
);

// call transfer api

const toAddress = "0xd5D3F35Bdd08950CCFE0DeAb638F8B5498297076";
const [getTransactionHash, getTransactionReceipt] = token.transfer(toAddress,10000);

// get transaction hash

const txHash = await getTransactionHash();

// get tx receipt
const txReceipt = await getTransactionReceipt();
```

## Need more help ? Here are few links -

* [Examples](https://github.com/ujjwalguptaofficial/ethcontracts/tree/main/examples/) 