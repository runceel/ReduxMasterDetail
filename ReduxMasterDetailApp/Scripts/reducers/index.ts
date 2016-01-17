import * as Redux from 'redux';
import * as authReducers from './authReducers';
import * as peopleMasterReducers from './peopleMasterReducers';
import * as alertReducers from './alertReducers';
import * as detailReducers from './detailReducers';
import AuthInfo from '../models/AuthInfo';
import PeopleMaster from '../models/PeopleMaster';
import Alert from '../models/Alert';
import Person from '../models/Person';

export interface AppState {
    auth: AuthInfo;
    peopleMaster: PeopleMaster;
    alert: Alert;
    detail: Person;
}


export const rootReducer = Redux.combineReducers({
    auth: authReducers.auth,
    peopleMaster: peopleMasterReducers.master,
    alert: alertReducers.alert,
    detail: detailReducers.detail
});
