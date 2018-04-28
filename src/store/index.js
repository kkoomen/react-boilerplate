import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Map } from 'immutable';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import immutableStateMerger from 'redux-storage-merger-immutablejs';

import rootReducer from '../reducers';
import loggerConfig from '../config/logger';

export const history = createHistory();

const initialStoreState = Map();
const enhancers = [];
const middlewares = [
  thunkMiddleware,
  routerMiddleware(history),
];

if (process.env.NODE_ENV !== 'production') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    console.log('[setup] ✓ Enabling Redux DevTools Extension');
    enhancers.push(devToolsExtension());
  }

  console.log('[setup] ✓ Enabling state logger');
  const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
    stateTransformer: (state) => state.toJS(),
    predicate: (getState, action) => {
      const state = getState();

      const showBlacklisted = state.getIn(['debug', 'logs', 'blacklisted']);
      if (loggerConfig.blacklist.indexOf(action.type) !== -1 && !showBlacklisted) {
        return false;
      }

      return state.getIn(['debug', 'logs', 'enabled']);
    },
  });
  middlewares.push(loggerMiddleware);
}

// Setup local storage
const storageReducer = storage.reducer(rootReducer, immutableStateMerger);
const storageEngine = createEngine(process.env.APP_NAME, (key, value) => {
  // Provide your keys here that have to be excluded of saving in local storage.
  const excluded_keys = ['ui']
  return (excluded_keys.indexOf(key) !== -1) ? Map() : value;
});
const storageMiddleware = storage.createMiddleware(storageEngine);
middlewares.push(storageMiddleware);

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  storageReducer,
  initialStoreState,
  composedEnhancers
);

// Use the provided storage loader to load the local storage in to the store.
const storageLoader = storage.createLoader(storageEngine);
storageLoader(store);

export default store;
