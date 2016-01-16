import Fetching from '../models/Fetching';
import * as actions from '../actions';
import SetFetchingPayload from '../actions/SetFetchingPayload';
import assign = require('object-assign');

export function fetching(state = new Fetching(), action: actions.Action<any>): Fetching {
    switch (action.type) {
        case SetFetchingPayload.TYPE:
            return assign({}, state, {
                fetching: (action.payload as SetFetchingPayload).fetching
            } as Fetching);
        default:
            return state;
    }
}
