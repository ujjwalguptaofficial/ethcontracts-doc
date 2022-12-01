---
sidebar_position: 1
keywords: [erc20, smart contracts, ethereum, polygon]
---

# ERC20 Burnable

ERC20 Burnable is an extension of ERC20 which has some additional methods related to **burn**. It contains all methods of ERC20.

Similar to ERC20 - you can interact with ERC20 Burnable token by creating instance of class `ERC20Burnable`. 

```
import { ERC20Burnable } from "@ethcontracts/core";

const token = new ERC20Burnable(<tokenAddress>);
```

## burn

burn method can be used to burn the amount of token of the caller account.

```
const [getTransactionHash, getTransactionReceipt] = token.burn(<amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

## burnFrom

burnFrom method can be used to burn the amount of token of an user account by the spender.

```
const [getTransactionHash, getTransactionReceipt] = token.burnFrom(<userAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```
