import * as FluxUtils from 'flux/utils';
import dispatcher from '../dispatchers/dispatcher';
import Auth from '../models/Auth';
import AuthSuccessAction from '../actions/AuthSuccessAction';
import assign = require('object-assign');

class AuthStore extends FluxUtils.ReduceStore<Auth> {
    getInitialState() {
        return new Auth();
    }

    reduce(store: Auth, action: any): Auth {
        if (action instanceof AuthSuccessAction) {
            var a = action as AuthSuccessAction;
            return assign({},
                store,
                {
                    userName: a.userName,
                    accessToken: a.accessToken
                } as Auth);
        }
        return store;
    }
}

export default new AuthStore(dispatcher);