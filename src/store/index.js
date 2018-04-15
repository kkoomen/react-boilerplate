import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import Immutable from 'immutable';

import rootReducer from '../reducers';

export const history = createHistory();

const initialState = Immutable.Map();
const enhancers = [];
const middlewares = [
  thunkMiddleware,
  routerMiddleware(history),
];

const fullState = (state) => state.toJS();

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
    stateTransformer: fullState,
  });
  middlewares.push(loggerMiddleware);
}

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
