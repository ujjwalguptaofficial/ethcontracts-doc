---
sidebar_position: 1
---

# ERC20

You can interact with erc20 token by creating instance of class `ERC20`. ERC20 class contains all different methods required for standard **erc20** contract.

ERC20 instance can be created by passing token address in constructor. 

```
import { ERC20 } from "@ethcontracts/core";

const token = new ERC20(<tokenAddress>);
```

## init

initiate token with provider.

### ethers.js

```
import { ERC20 } from "@ethcontracts/core";
import { EthersClient } from "@ethcontracts/ethers";
await token.init(new EthersClient(<wallet provider>));
```

### web3.js

```
import { ERC20 } from "@ethcontracts/core";
import { Web3Client } from "@ethcontracts/web3";
await token.init(new Web3Client(<wallet provider>));
```

👉 you can call `init` multiple times with different provider. This allows you to use the same token instance in multichain dapp.

## getName

getName returns the name of the token.

```
const tokenName = await token.getName();
```
## getDecimals

getDecimals returns the decimals of the token.

```
const tokenDecimal = await token.getDecimals();
```
## getSymbol

getSymbol returns the symbol of the token.

```
const symbol = await token.getSymbol();
```

## getBalance

getBalance returns the balance of a user.

```
const tokenBalance =  await token.getBalance(<userAddress>);
```

## getTotalSupply

getTotalSupply returns the total supply of the token.

```
const totalSupply = await token.getTotalSupply();
```
 
## getAllowance

getAllowance returns the allowance of a spender for a user.

```
const allowance = await token.getAllowance(<owner>, <spender>);
```

## approve

approve method approves the allowance of a spender for the current user.

```
const [getTransactionHash, getTransactionReceipt] = token.approve(<spenderAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

## transfer

transfer method can be used to transfer amount to another user.

```
const [getTransactionHash, getTransactionReceipt] = token.transfer(<toAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

## transferFrom

transferFrom method can be used to transfer amount to another user by a spender or owner.

```
const [getTransactionHash, getTransactionReceipt] = token.transferFrom(<fromAddress>,<toAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

## increaseAllowance

increaseAllowance method can be used to increase the allowance of a spender.

```
const [getTransactionHash, getTransactionReceipt] = token.increaseAllowance(<spenderAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```

## decreaseAllowance

decreaseAllowance method can be used to decrease the allowance of a spender.

```
const [getTransactionHash, getTransactionReceipt] = token.decreaseAllowance(<spenderAddress>, <amount>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```
