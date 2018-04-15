import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  routing: routerReducer,
});

export default rootReducer;
