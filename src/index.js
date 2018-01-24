import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getWeb3 from './util/web3/getWeb3';

// Layouts
import Splash from './Splash'
import App from './App';

// Redux Store
import store, { history } from './store';

// Display Splash until web3 is initialized
ReactDOM.render(
  <Splash width='500px' height='500px' alt='Initializing Web3...' />,
  document.getElementById('dapp')
);

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
