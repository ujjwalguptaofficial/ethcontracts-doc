---
sidebar_position: 1
---

# Get started

In this get started tutorial - we will learn how to install, setup and interact with contract api. 

## Installation

```
npm i @opweb3/ethcontracts
```

## Setup

You can use any ethereum library. Currently we support ethers and web3.js.
### ethers

```
import { EthersClient } from "@opweb3/ethcontracts";
```

### web3js

```
import { Web3Client } from "@opweb3/ethcontracts";
```

## ERC20 balance

Let's see how we can get balance of an erc20 token.

### ethers.js

```
import { EthersClient, ERC20 } from "@opweb3/ethcontracts";
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
import { Web3Client, ERC20 } from "@opweb3/ethcontracts";
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
