import AuthInfo from '../models/AuthInfo';

export default class AuthUtils {
    static signIn(userName: string, password: string): Promise<AuthInfo> {
        return fetch('/Token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: "grant_type=password&username=${userName}&password=${password}"
        }).then(x => {
            if (x.status !== 200) {
                throw Error(x.status.toString());
            }
            return x.json();
        }).then((x: { access_token: string, userName: string }) => {
            var authInfo = new AuthInfo();
            authInfo.userName = x.userName;
            authInfo.accessToken = x.access_token;
            return authInfo;
        });
    }
}
