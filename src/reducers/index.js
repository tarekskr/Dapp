import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import web3Reducer from '../util/web3/web3Reducer';

import deploy from './deploy';
import explorer from './explorer';

export default combineReducers({
  routing: routerReducer,
  web3: web3Reducer,
  deploy: deploy,
  explorer: explorer,
});
