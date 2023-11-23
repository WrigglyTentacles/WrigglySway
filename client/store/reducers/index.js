import { combineReducers } from 'redux';

import user from './user';

const createRootReducer = routerReducer => combineReducers({
  router: routerReducer,
  user,
});

export default createRootReducer;
