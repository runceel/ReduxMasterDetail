import * as Redux from 'redux';
import * as authReducers from './authReducers';
import * as fetchingReducers from './fetchingReducers';

export const rootReducer = Redux.combineReducers({
    auth: authReducers.auth,
    fetching: fetchingReducers.fetching
});
