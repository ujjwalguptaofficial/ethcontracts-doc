---
sidebar_position: 5
---

# Customization

EthContracts is very flexible and allows you to customize or extend as per your need.   

Let's see some example of different use cases - 

## Contracts have additional methods

Consider your `erc20` contracts contains extra method `approveMax` which approves max amount to spender. 

So we need to add this additional method to our `ERC20` class. For this we will create another class - let's say `ERC20MyApp` and extend the `ERC20` class. And inside our new class we will add our additional method - `approveMax`.

```
import { ERC20 } from "@ethcontracts/core";
class ERC20MyApp extends ERC20{
    constructor(tokenAddress:string){
        super(tokenAddress);
    }

    approveMax(){
        const method = this.contact.method("approveMax");
        return this.processWrite(method);
    }
}
```

We have successfully created the class but we need to also update the ABI now - as the abi stored does not have `approveMax` method. 

In this case you can use `setABI` of [ABIManager](/docs/abi-management/) to set the ABI and it will be automatically picked by the contracts implementation.

The contract name is treated as identifier, so you have the options of choosing same contract name or use your own contract name.

### setABI

#### Same contract name

ERC20 uses `erc20` as contract name. So you can use the same name to set the ABI. 

```
import { ABIManager } from "@ethcontracts/core";
await ABIManager.setABI("erc20", abi);
```

#### Change Contract name

You can choose your own contract name and avoid any issues with existing abi. This is recommended way when you are customizing the contracts.

Let's see we want to choose - `erc20_myapp` as contract name.

```
import { ABIManager } from "@ethcontracts/core";
await ABIManager.setABI("erc20_myapp", abi);
```

now you need to also provide the name in your custom class. You can pass the contract name in second parameter of parent constructor using `super`.

```
import { ERC20 } from "@ethcontracts/core";
class ERC20MyApp extends ERC20 {

    constructor(tokenAddress:string){
        // provide contract name in super
        super(tokenAddress, "erc20_myapp");
    }

    approveMax(){
        const method = this.contact.method("approveMax");
        return this.processWrite(method);
    }
}
```

Here is how you use it - 

```
import { ABIManager } from "@ethcontracts/core";
await ABIManager.setABI("erc20_myapp", abi);

const token =  new ERC20MyApp(<token address>);

// make sure setABI is called before creating token.init
token.init(<wallet provider>);
```