import MarketContractRegistry from '../../../../build/contracts/MarketContractRegistry.json'
//import { browserHistory } from 'react-router'
import store from '../../../store'

const contract = require('truffle-contract')

export function loadContracts() {
  let web3 = store.getState().web3.web3Instance

  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {

    return function(dispatch) {
      // Using truffle-contract we create the MarketContractRegistry object.
      const marketContractRegistry = contract(MarketContractRegistry)
      marketContractRegistry.setProvider(web3.currentProvider)

      // Declaring this for later so we can chain functions.
      var marketContractRegistryInstance
      marketContractRegistry.deployed().then(function(instance) {
        marketContractRegistryInstance = instance
        console.log("Found the Market Contract Registry at" + instance.address)
        // Attempt to find deployed contracts
        marketContractRegistryInstance.getAddressWhiteList.call().then(function(deployed_contracts) {
          console.log("Found "  + deployed_contracts.length + " contracts deployed");
          for (var index = 0; index < deployed_contracts.length; index ++)
          {
            console.log(deployed_contracts[index]);
            //TODO: creat nice contract explorer that has filters and search
          }
        })
      })
    }
  } else {
    console.error('Web3 is not initialized.');
  }
}
