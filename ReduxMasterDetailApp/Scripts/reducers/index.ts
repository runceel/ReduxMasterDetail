import * as Redux from 'redux';
import * as authReducers from './authReducers';
import * as fetchingReducers from './fetchingReducers';
import Fetching from '../models/Fetching';
import AuthInfo from '../models/AuthInfo';

export interface AppState {
    auth: AuthInfo;
    fetching: Fetching;
}


export const rootReducer = Redux.combineReducers({
    auth: authReducers.auth,
    fetching: fetchingReducers.fetching
});
