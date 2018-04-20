import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducers from '../reducers';

// autoRehydrate is a store enhancer that pulls all data out and sending them through all reducers
const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate()
  )
);

// sets up redux-persist to watch for change in state in redux store, and update AsyncStorage accordingly
persistStore(
  store,
  { storage: AsyncStorage, whitelist: ['likedJobs'] }
);

export default store;
