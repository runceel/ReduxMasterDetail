import AuthUtils from '../webapis/AuthUtils';
import dispatcher from '../dispatchers/dispatcher';
import history from '../history';
import AuthSuccessAction from './AuthSuccessAction';

export default class AuthActionCreators {
    static signIn(userName: string, password: string) {
        AuthUtils.signIn(userName, password)
            .then(x => {
                dispatcher.dispatch(new AuthSuccessAction(x.accessToken, x.userName));
                history.push('/master');
            }).catch(x => {
                console.log('ログイン失敗');
            });;
    }
}