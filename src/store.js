import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducer';

export const history = createHistory();

// Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const routingMiddleware = routerMiddleware(history);

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, routingMiddleware))
);

export default store;
