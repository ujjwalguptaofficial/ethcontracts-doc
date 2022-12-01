---
sidebar_position: 6
---

# ABI management

EthContracts abstracts the ABI from the contracts implementation and internally manages ABI. This makes interacting with contracts class easy and user friendly.

All ABI are stored on github and fetched on demand and also cached. Here is github link - [ABI storage](https://github.com/ujjwalguptaofficial/ethcontracts/tree/main/abi)

## ABIManager

ABIManager is a special class which manages the abi. It has two methods - 

1. getABI
2. setABI

### getABI

getABI fetches abi from cdn or cache (if already fetched). It takes contract name as input.

```
import { ABIManager } from "@ethcontracts/core";
const abi = await ABIManager.getABI("erc20");
```

### setABI

setABI is used to set the ABI. It stores the ABI in cache and when getABI will be called the ABI are served from the cache saved by setABI.

It takes two parameter - `contractName` and `ABI`

```
import { ABIManager } from "@ethcontracts/core";
const abi = await ABIManager.setABI("erc20", abi);
```