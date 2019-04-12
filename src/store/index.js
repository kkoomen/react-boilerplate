import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { Map } from 'immutable';

import * as storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import immutableStateMerger from 'redux-storage-merger-immutablejs';
import localStorageFilter from 'redux-storage-decorator-filter';

import rootReducer from 'src/reducers';
import loggerConfig from 'src/config/logger';
import { __DEBUG__ } from 'src/config/constants';

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

const initialStoreState = Map();
const enhancers = [];
const middlewares = [
  thunkMiddleware,
  routerMiddleware(history),
];

let devtools;

if (__DEBUG__) {
  devtools = (
    typeof window !== 'undefined'
    && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionsBlacklist: [] })
  );

  if (devtools) {
    console.info('[setup] ✓ Enabling Redux DevTools Extension');
  }

  console.info('[setup] ✓ Enabling state logger');
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

// Provide the state keys to persist.
// See: https://www.npmjs.com/package/redux-storage-decorator-filter
const localStorageWhitelist = ['debug'];

const storageReducer = storage.reducer(rootReducer(history), immutableStateMerger);
const storageEngine = localStorageFilter(createEngine(process.env.APP_NAME), localStorageWhitelist);
const storageMiddleware = storage.createMiddleware(storageEngine);
middlewares.push(storageMiddleware);


const composedEnhancers = devtools || compose;
const storeEnhancers = composedEnhancers(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  storageReducer,
  initialStoreState,
  storeEnhancers
);

// Use the provided storage loader to load the local storage in to the store.
const storageLoader = storage.createLoader(storageEngine);
storageLoader(store);

// Enable Webpack hot module replacement for reducers.
if (module.hot) {
  module.hot.accept('src/reducers', () => {
    store.replaceReducer(rootReducer(history));
  });
}

export default store;
