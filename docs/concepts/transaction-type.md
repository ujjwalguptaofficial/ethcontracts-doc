---
sidebar_position: 1
---

# Transaction type

In blockchain there are two types of transaction -

1. Read
2. Write

## 1.Read

`Read` transaction allows you to call smart contract methods which returns some data without modifying any state in blockchain. 

Methods like - `getBalance`, `getDecimals` etc are read transaction. 

Calling read transaction in EthContracts.js is very simple. Let's see an example of calling `getBalance` method

```
import { ERC20, EthersClient } from "@opweb3/ethcontracts";

const token = new ERC20(<tokenAddress>);
await token.init(new EthersClient(<wallet provider>));

const balance = await token.getBalance(<user address>);

```

## 2.Write

Write transaction allows you to call smart contract methods which modify state in the blockchain.

In write transaction - you need to two things -

* Transaction hash
* Transaction receipt

EthContracts write transaction returns hook(inspired by react) which allows you to get these value.

Let's see an example -

```
import { ERC20, EthersClient } from "@opweb3/ethcontracts";

const token = new ERC20(<tokenAddress>);
await token.init(new EthersClient(<wallet provider>));

const [getTransactionHash, getTransactionReceipt] =  token.transfer(<toAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

