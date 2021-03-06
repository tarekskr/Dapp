import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getWeb3 from './util/web3/getWeb3';

// Layouts
import App from './App';

// Redux Store
import store, { history } from './store';

// Initialize web3 and set in Redux
getWeb3
  .then(results => {
    console.log('Web3 initialized!');

    ReactDOM.render(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
      document.getElementById('dapp')
    );
  })
  .catch(() => {
    console.log('Error in web3 initialization.');
  });
