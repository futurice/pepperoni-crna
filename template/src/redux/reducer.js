import { persistCombineReducers } from 'redux-persist';
import { persistConfig } from './persist';

// ## Reducer Imports ##
import NavigatorStateReducer from '../state/navigator';

export default persistCombineReducers(persistConfig, {
  // ## Reducers ##

  // Navigator state
  navigatorState: NavigatorStateReducer,
});
