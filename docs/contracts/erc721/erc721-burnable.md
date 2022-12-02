---
sidebar_position: 2
keywords: [erc721, burnable, smart contracts, ethereum, polygon]
---

# ERC721 Burnable

ERC721 Burnable is an extension of ERC721 which has some additional methods related to **burn**. It contains all methods of ERC721 as its extension.

Similar to ERC721 - you can interact with ERC721 Burnable token by creating instance of class `ERC721Burnable`. 

```
import { ERC721Burnable } from "@ethcontracts/core";

const token = new ERC721Burnable(<tokenAddress>);
```

## burn

burn method can be used to burn the amount of token of the caller account.

```
const [getTransactionHash, getTransactionReceipt] = token.burn(<tokenId>);

const txhash = await getTransactionHash();
const txReceipt = await getTransactionReceipt();
```
