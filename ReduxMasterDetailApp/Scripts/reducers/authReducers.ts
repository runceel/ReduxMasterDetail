import AuthInfo from '../models/AuthInfo';
import * as actions from '../actions';
import AuthPayload from '../actions/AuthPayload';
import assign = require('object-assign');

function setAuth(state: AuthInfo, action: actions.Action<AuthPayload>): AuthInfo {
    switch (action.type) {
        case AuthPayload.TYPE:
            return assign({}, state, action.payload);
        default:
            return state;
    }
}

export function auth(state = new AuthInfo(), action: actions.Action<any>): AuthInfo {
    switch (action.type) {
        case AuthPayload.TYPE:
            return setAuth(state, action);
        default:
            return state;
    }
}
