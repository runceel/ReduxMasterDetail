import LoadPeoplePayload from './LoadPeoplePayload';
import * as actions from './';
import * as Redux from 'redux';
import * as reducers from '../reducers';
import PeopleUtils from '../webapis/PeopleUtils';
import Person from '../models/Person';

function setPeople(people: Person[], count: number): actions.Action<LoadPeoplePayload> {
    return {
        type: LoadPeoplePayload.TYPE,
        payload: new LoadPeoplePayload(people, count)
    };
}

export function loadPeople(skip: number, pageSize: number) {
    return (dispatch: Redux.Dispatch, getState: () => reducers.AppState) => {
        var token = getState().auth.accessToken;
        var load = PeopleUtils.loadPeople(token, skip, pageSize);
        var count = PeopleUtils.count(token);
        Promise.all<any>([load, count])
            .then(x => {
                dispatch(setPeople(x[0], x[1]));
            });
    };
}
