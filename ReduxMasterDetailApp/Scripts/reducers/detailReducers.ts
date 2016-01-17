import Person from '../models/Person';
import * as actions from '../actions';
import DetailActionPayload from '../actions/DetailActionPayload';
import assign = require('object-assign');

function setDetail(state: Person, action: actions.Action<DetailActionPayload>): Person {
    switch (action.type) {
        case DetailActionPayload.TYPE:
            return assign({}, state, action.payload.detail);
        default:
            return state;
    }
}

export function detail(state = new Person(), action: actions.Action<any>): Person {
    switch (action.type) {
        case DetailActionPayload.TYPE:
            return setDetail(state, action);
        default:
            return state;
    }
}