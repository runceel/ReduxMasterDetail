import * as Redux from 'redux';
import * as states from '../reducers/states';
import * as fetchingActionCreators from './fetchingActionCreators';
import AuthUtils from '../webapis/AuthUtils';
import AuthInfo from '../models/AuthInfo';
import * as actions from './';
import AuthPayload from './AuthPayload';

function setAuthInfo(authInfo: AuthInfo): actions.Action<AuthPayload> {
    return {
        type: AuthPayload.TYPE,
        payload: new AuthPayload(authInfo)
    };
}

export function signIn(userName: string, password: string) {
    return (dispatch: Redux.Dispatch, getState: () => states.AppState) => {
        var state = getState();
        if (state.fetching) {
            return;
        }

        dispatch(fetchingActionCreators.setFetching(true));
        AuthUtils.signIn(userName, password)
            .then(x => {
                dispatch(setAuthInfo(x));
                dispatch(fetchingActionCreators.setFetching(false));
            }).catch(x => {
                // TODO: エラーメッセージ
                dispatch(fetchingActionCreators.setFetching(false));
            });
    };
}

