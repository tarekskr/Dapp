<img src="https://image.ibb.co/nANcyR/logo_MARKET_banner_2.png" align="middle">

# MarketProtocol Dapp
Decentralized blockchain application utilizing [MARKET](https://github.com/MarketProject/MarketProtocol)

Take a look at our [FAQ](https://github.com/MarketProject/MarketProtocol/wiki/Frequently-Asked-Questions) for a little more explanation.

## Getting Started
Assuming you have npm already, Install truffle
```
$ npm install -g truffle
```
Clone this repository and use npm to install needed dependencies
```
$ git clone https://github.com/MarketProject/Dapp.git
$ cd Dapp
$ npm install
```
At this point you can start the truffle development environment
```
$ truffle develop
```

From here, you now need to bring up the ethereum bridge for the Oraclize.it service.  Instructions for installation can be found [here](https://github.com/MarketProject/ethereum-bridge) 

start the ethereum bridge (in a separate console) to run connected
to the truffle development environment you have created
```
$ cd ethereum-bridge/
$ node bridge -H localhost:9545 -a 9 --dev
```
Once the bridge has fully initialized, you should be able to run the example migrations for the MARKET smart contracts.

```
truffle(develop)> migrate
```
If this fails due to a `revert` , please be sure the bridge is listening prior to attempting the migration.

Now we can bring Dapp with the commands below

```
$ cd Dapp
$ npm run start
```


## The Plan
We want to create a way for users to interact with MARKET on testnet or a private chain as we develop further functionality. The goal for this dApp is two fold, one is to create a nice way for users to deploy and view deployed MARKET contracts.  This will guide the users through the process of oracle selection, the important variables, estimated amount of ETH to fund gas needs and some sanity checks to allow users to create reasonable contracts that will generate trading interest from others.  

The second is to create a trading game.  This would only ever be deployed to a testnet.  A user would create a wallet that is credited with an arbitrary amount of ERC20 staking tokens and be able to trade a selected MARKET contract.  A hosted order book would show the current liquidity for that given contract provided by a bot that is quoting around either historic pricing for a real world financial instrument or just a random walk.  The user would be able to enter orders and trade against the bot while gaining of losing the ERC20 tokens they recieved upon starting the game.    
