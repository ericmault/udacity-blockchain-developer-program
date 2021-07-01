# Ethereum Dapp for tracking items through Supply Chain

This repository contains an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

The DApp User Interface when running should look like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_transaction_history.png)


supplyChain contract address: 0x62658a8E2aA04fCAD391C364cca42C9fcb07Fb6c

supplyChain Transaction hash: 0xfda7912d094bf34764de4e56dd88846e3439dbdf24966532a588da47343c7032

Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0xfda7912d094bf34764de4e56dd88846e3439dbdf24966532a588da47343c7032
   > Blocks: 1            Seconds: 12
   > contract address:    0x62658a8E2aA04fCAD391C364cca42C9fcb07Fb6c
   > block number:        8856123
   > block timestamp:     1625078753
   > account:             0x3A4a05517f3FaC72b6A3BE284F9EF4c08F02774B
   > balance:             37.318959625
   > gas used:            1750956 (0x1ab7ac)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.01750956 ETH

## UML

Activity 
![activity](UML\ActivityDiagram.jpg)

Data Model

![datamodel](UML\DataModelingDiagram.jpg)

Sequence

![sequence](UML\SequenceDiagram.jpg)

State

![state](UML\StateDiagram.jpg)

## Libraries

Roles Library and truffle-hd-wallet-provider are used

## IPFS

IPFS was not used in this project

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS
