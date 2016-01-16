import * as actions from '../actions';
import LoadPeoplePayload from '../actions/LoadPeoplePayload';
import PeopleMaster from '../models/PeopleMaster';
import assign = require('object-assign');

function loadPeople(state: PeopleMaster, action: actions.Action<LoadPeoplePayload>): PeopleMaster {
    switch (action.type) {
        case LoadPeoplePayload.TYPE:
            return assign({}, state, {
                totalCount: action.payload.totalCount,
                people: action.payload.people
            } as PeopleMaster);
        default:
            return state;
    }
}

export function master(state = new PeopleMaster(), action: actions.Action<any>): PeopleMaster {
    switch (action.type) {
        case LoadPeoplePayload.TYPE:
            return loadPeople(state, action);
        default:
            return state;
    }
}
