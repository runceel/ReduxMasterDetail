import Alert from '../models/Alert';
import * as actions from '../actions';
import AlertPayload from '../actions/AlertPayload';
import assign = require('object-assign');

export function alert(state = new Alert(), action: actions.Action<any>) {
    switch (action.type) {
        case AlertPayload.TYPE:
            return assign({}, state, { message: (action.payload as AlertPayload).message } as Alert);
        default:
            return state;
    }
}
