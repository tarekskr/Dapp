import QueryTest from '../build/contracts/OraclizeQueryTest';

import store from '../store';

const contract = require('truffle-contract');

export function testQuery(querySpecs) {
  let web3 = store.getState().web3.web3Instance;

  // Double-check web3's status.
  if (web3 && typeof web3 !== 'undefined') {
    // Using truffle-contract create needed contract objects and set providers
    const queryTest = contract(QueryTest);
    queryTest.setProvider(web3.currentProvider);

    // Get current ethereum wallet.
    web3.eth.getCoinbase((error, coinbase) => {
      // Log errors, if any.
      if (error) {
        console.error(error);
      }

      console.log('Attempting to submit test query from ' + coinbase);
      queryTest.deployed().then(function(queryTestContractInstance) {
        queryTestContractInstance
          .testOracleQuery(
            querySpecs.oracleDataSource,
            querySpecs.oracleQuery,
            { gas: 200000, from: coinbase, value: web3.toWei('.006', 'ether') }
          )
          .then(function(queryTransactionResults) {
            // TODO: this is a very rough example, please clean up!!!

            let queryID;
            for (let i = 0; i < queryTransactionResults.logs.length; i++) {
              const log = queryTransactionResults.logs[i];
              if (log.event === 'QueryScheduled') {
                // We found the event!
                console.log(
                  'Scheduled Query Id = ' + log.args.queryIDScheduled
                );
                queryID = log.args.queryIDScheduled;
              }
            }

            // TODO: not sure where to acutally handle this event
            queryTestContractInstance
              .QueryCompleted()
              .watch(function(error, result) {
                console.log(result);
                // TODO:  subscribe to events from contract and when this query is completed, we can display the results.
                console.log('attempting to retrieve results for ' + queryID);
                queryTestContractInstance.getQueryResults
                  .call(queryID)
                  .then(function(queryResults) {
                    console.log(queryResults);
                  });
              });
          });
      });
    });
  } else {
    console.error('Web3 is not initialized.');
  }
}
