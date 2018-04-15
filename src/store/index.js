import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import Immutable, { Iterable } from 'immutable';
import persistState from 'redux-localstorage';

import rootReducer from '../reducers';

export const history = createHistory();

const initialState = Immutable.Map();
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
      return state.getIn(['debug', 'logs', 'enabled']);
    },
  });
  middlewares.push(loggerMiddleware);
}

enhancers.push(persistState(['debug'], {
  key: process.env.APP_NAME,
  slicer: (paths) => (state) => {
    return state.filter((obj, key) => paths.indexOf(key) !== -1);
  },
  serialize: (state) => {
    return JSON.stringify(Iterable.isIterable(state) ? state.toJS() : {});
  },
  deserialize: (state) => {
    return state ? Immutable.fromJS(JSON.parse(state)) : state;
  },
  merge: (initialState, persistedState) => {
    return initialState.merge(persistedState);
  },
}));

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

export default store;
