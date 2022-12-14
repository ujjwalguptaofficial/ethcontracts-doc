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
import { ERC20 } from "@ethcontracts/core";
import { EthersClient } from "@ethcontracts/ethers";

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
import { ERC20 } from "@ethcontracts/core";
import { EthersClient } from "@ethcontracts/ethers";

const token = new ERC20(<tokenAddress>);
await token.init(new EthersClient(<wallet provider>));

const [getTransactionHash, getTransactionReceipt] =  token.transfer(<toAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

### Transaction configuration

Every write transaction accepts transaction config as last parameter which is optional. Let's see an example of passing - `gas`

```
import { ERC20 } from "@ethcontracts/core";
import { EthersClient } from "@ethcontracts/ethers";

const token = new ERC20(<tokenAddress>);
await token.init(new EthersClient(<wallet provider>));

const [getTransactionHash, getTransactionReceipt] =  token.transfer(<toAddress>, <amount>,{
    gas : 5000
});

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

#### Configuration list

Following options are available to pass in configuration - 

```
from?: string;
to?: string;
value?: number | string | any;
gasLimit?: number | string;
gasPrice?: number | string | any;
data?: string;
nonce?: number;
chainId?: number;
chain?: string;
hardfork?: string;
maxFeePerGas?: number | string;
maxPriorityFeePerGas?: number | string;
type?: number;
```
