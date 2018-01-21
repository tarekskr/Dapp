import MarketContractRegistry from '../../../../build/contracts/MarketContractRegistry.json'
import MarketContract from '../../../../build/contracts/MarketContractOraclize.json'
import MarketCollateralPool from '../../../../build/contracts/MarketCollateralPool.json'
import MarketToken from '../../../../build/contracts/MarketToken.json'
//import OrderLib from '../../../../build/contracts/OrderLib.json'
import store from '../../../store'

const contract = require('truffle-contract')

export function deployContract(contractSpecs) {

  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    // Using truffle-contract create needed contract objects and set providers
    const marketContractRegistry = contract(MarketContractRegistry);
    marketContractRegistry.setProvider(web3.currentProvider);

    const marketContract = contract(MarketContract);
    marketContract.setProvider(web3.currentProvider);

    const marketCollateralPool = contract(MarketCollateralPool);
    marketCollateralPool.setProvider(web3.currentProvider);

    const marketToken = contract(MarketToken);
    marketToken.setProvider(web3.currentProvider);

    // const orderLib = contract(OrderLib);
    // orderLib.setProvider(web3.currentProvider);

    // create array to pass to MARKET contract constructor
    const contractConstuctorArray = [
      contractSpecs.priceFloor,
      contractSpecs.priceCap,
      contractSpecs.priceDecimalPlaces,
      contractSpecs.qtyDecimalPlaces,
      contractSpecs.expirationTimeStamp
    ];

    // find the address of the MKT token so we can link to our deployed contract
    marketToken.deployed().then(function (marketTokenInstance) {
      marketContract.new(
        contractSpecs.contractName,
        marketTokenInstance.address,
        contractSpecs.baseTokenAddress,
        contractConstuctorArray,
        contractSpecs.oracleDataSource,
        contractSpecs.oracleQuery,
        contractSpecs.oracleQueryRepeatSeconds,
        {gas: 6100000, value: web3.toWei('.2', 'ether')} //TODO remove hard coded gas
      ).then(function (marketContractInstance) {
        marketCollateralPool.new(marketContractInstance.address, {gas: 5100000}).then(
          function (marketCollateralPoolInstance) {
            marketContractInstance.setCollateralPoolContractAddress(marketCollateralPoolInstance.address).then(function () {
              marketContractRegistry.deployed().then(function (marketContractRegistryInstance) {
                marketContractRegistryInstance.addAddressToWhiteList(marketContractInstance.address,
                  {from: web3.eth.accounts[0]});
              })
            })
          }
        )
      })
    });

  } else {
    console.error('Web3 is not initialized.');
  }
}
