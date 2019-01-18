import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import debug from './Debug';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  debug,
});

export default rootReducer;
