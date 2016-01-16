import * as Redux from 'redux';
import * as reducers from '../reducers';
import * as fetchingActionCreators from './fetchingActionCreators';
import AuthUtils from '../webapis/AuthUtils';
import AuthInfo from '../models/AuthInfo';
import * as actions from './';
import AuthPayload from './AuthPayload';
import history from '../history';

function setAuthInfo(authInfo: AuthInfo): actions.Action<AuthPayload> {
    return {
        type: AuthPayload.TYPE,
        payload: new AuthPayload(authInfo)
    };
}

export function signIn(userName: string, password: string) {
    return (dispatch: Redux.Dispatch, getState: () => reducers.AppState) => {
        var state = getState();
        if (state.fetching.fetching) {
            return;
        }

        dispatch(fetchingActionCreators.setFetching(true));
        AuthUtils.signIn(userName, password)
            .then(x => {
                dispatch(setAuthInfo(x));
                dispatch(fetchingActionCreators.setFetching(false));
                history.push('/master');
            }).catch(x => {
                // TODO: エラーメッセージ
                dispatch(fetchingActionCreators.setFetching(false));
            });
    };
}

