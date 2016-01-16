import * as Redux from 'redux';
import * as reducers from '../reducers';
import AuthUtils from '../webapis/AuthUtils';
import AuthInfo from '../models/AuthInfo';
import * as actions from './';
import AuthPayload from './AuthPayload';
import history from '../history';
import * as alertActionCreators from './alertActionCreators';

function setAuthInfo(authInfo: AuthInfo): actions.Action<AuthPayload> {
    return {
        type: AuthPayload.TYPE,
        payload: new AuthPayload(authInfo)
    };
}

export function signIn(userName: string, password: string) {
    return (dispatch: Redux.Dispatch, getState: () => reducers.AppState) => {
        var state = getState();

        AuthUtils.signIn(userName, password)
            .then(x => {
                dispatch(setAuthInfo(x));
                history.push('/master');
            }).catch((x: Error) => {
                dispatch(alertActionCreators.alert(x.message));
                console.log(x);
            });
    };
}

