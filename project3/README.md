# Ethereum Dapp for tracking items through Supply Chain

This repository contains an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_transaction_history.png)


supplyChain contract address: 0xa4CD0BCB92f62c841618947733CE48a5a28B3e2B

supplyChain Transaction hash: 0xcccd8d9f3afa849d415c507ad27eb790c1fcac02b56378ebc647abb1c90b0de3

  Replacing 'SupplyChain'
   -----------------------
   > transaction hash:    0xcccd8d9f3afa849d415c507ad27eb790c1fcac02b56378ebc647abb1c90b0de3
   > Blocks: 0            Seconds: 8
   > contract address:    0xa4CD0BCB92f62c841618947733CE48a5a28B3e2B
   > block number:        8861523
   > block timestamp:     1625159844
   > account:             0x3A4a05517f3FaC72b6A3BE284F9EF4c08F02774B
   > balance:             37.275814500689011042
   > gas used:            2596985 (0x27a079)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02596985 ETH

## UML

Activity 
![activity](UML\ActivityDiagram.jpg)

Data Model

![datamodel](UML\DataModelingDiagram.jpg)

Sequence

![sequence](UML\SequenceDiagram.jpg)

State

![state](UML\StateDiagram.jpg)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
npm install ganache-cli
npm install truffle
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository,

Change directory to ```project3``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project3
npm install
```

Launch Ganache:

```
ganache-cli -m "<your phrase here>"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli1.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile2.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate3.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test4.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```


## Libraries

Roles Library and truffle-hd-wallet-provider are used

## IPFS

IPFS was not used in this project

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
