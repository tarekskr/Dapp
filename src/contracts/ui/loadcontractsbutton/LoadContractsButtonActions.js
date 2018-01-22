import MarketContractRegistry from 'market-solidity/build/contracts/MarketContractRegistry';
import MarketContract from 'market-solidity/build/contracts/MarketContractOraclize';
import MarketCollateralPool from 'market-solidity/build/contracts/MarketCollateralPool';

import store from '../../../store';

const contract = require('truffle-contract');

export function loadContracts() {
  let web3 = store.getState().web3.web3Instance;

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    return function(dispatch) {
      // Using truffle-contract create needed contract objects and set providers
      const marketContractRegistry = contract(MarketContractRegistry);
      marketContractRegistry.setProvider(web3.currentProvider);

      const marketContract = contract(MarketContract);
      marketContract.setProvider(web3.currentProvider);

      const marketCollateralPool = contract(MarketCollateralPool);
      marketCollateralPool.setProvider(web3.currentProvider);

      // Declaring this for later so we can chain functions.
      var marketContractRegistryInstance;
      marketContractRegistry.deployed().then(function(instance) {
        marketContractRegistryInstance = instance;
        console.log('Found the Market Contract Registry at' + instance.address);

        // Attempt to find deployed contracts and get metadata
        marketContractRegistryInstance.getAddressWhiteList
          .call()
          .then(function(deployedContracts) {
            console.log(
              'Found ' + deployedContracts.length + ' contracts deployed'
            );
            const contractsToDisplay = [];
            for (var index = 0; index < deployedContracts.length; index++) {
              marketContract
                .at(deployedContracts[index])
                .then(async function(instance) {
                  const contractJSON = [];
                  contractJSON[
                    'CONTRACT_NAME'
                  ] = await instance.CONTRACT_NAME.call();
                  contractJSON['BASE_TOKEN'] = await instance.BASE_TOKEN.call();
                  contractJSON[
                    'PRICE_FLOOR'
                  ] = await instance.PRICE_FLOOR.call();
                  contractJSON['PRICE_CAP'] = await instance.PRICE_CAP.call();
                  contractJSON[
                    'PRICE_DECIMAL_PLACES'
                  ] = await instance.PRICE_DECIMAL_PLACES.call();
                  contractJSON[
                    'QTY_DECIMAL_PLACES'
                  ] = await instance.QTY_DECIMAL_PLACES.call();
                  contractJSON[
                    'ORACLE_QUERY'
                  ] = await instance.ORACLE_QUERY.call();
                  contractJSON['lastPrice'] = await instance.lastPrice.call();
                  contractJSON['isSettled'] = await instance.isSettled.call();

                  marketCollateralPool
                    .at(await instance.marketCollateralPoolAddress.call())
                    .then(async function(collateralPoolInstance) {
                      contractJSON[
                        'collateralPoolBalance'
                      ] = await collateralPoolInstance.collateralPoolBalance.call();
                    });

                  console.log(contractJSON['CONTRACT_NAME'] + ' created');
                  contractsToDisplay.push(contractJSON);
                });
            }
            console.log(contractsToDisplay);
            //TODO: build table and display.
          });
      });
    };
  } else {
    console.error('Web3 is not initialized.');
  }
}
