---
sidebar_position: 10
---

# Transaction Data

**EthContracts.js** abstracts the smart contracts calling part but there might be some times when you need to debug data being sent because your smart contract are throwing some errors or due to any different reason.

EthContracts allows you to get the transaction data using a property `transactionData`. 

```
import { ERC20 } from "@ethcontracts/core";
import { EthersClient } from "@ethcontracts/ethers";

const token = new ERC20(<tokenAddress>);
await token.init(new EthersClient(<wallet provider>));

const txData = await token.transactionData.approve("0xd5D3F35Bdd08950CCFE0DeAb638F8B5498297076", 5000);
```