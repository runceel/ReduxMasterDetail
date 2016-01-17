import DetailActionPayload from './DetailActionPayload';
import * as actions from './';
import * as Redux from 'redux';
import PeopleUtils from '../webapis/PeopleUtils';
import * as reducers from '../reducers';
import * as alertActionCreators from './alertActionCreators';
import Person from '../models/Person';

function setDetail(detail: Person): actions.Action<DetailActionPayload> {
    return {
        type: DetailActionPayload.TYPE,
        payload: new DetailActionPayload(detail)
    };
}

export function select(id: number) {
    return (dispatch: Redux.Dispatch, getState: () => reducers.AppState) => {
        var state = getState();
        PeopleUtils.get(state.auth.accessToken, id)
            .then(x => {
                dispatch(setDetail(x));
            }).catch(x => {
                dispatch(alertActionCreators.alert('データ取得時にエラーが発生しました'));
            });
    };
}

export function update(p: Person) {
    return (dispatch: Redux.Dispatch, getState: () => reducers.AppState) => {
        var state = getState();
        PeopleUtils.update(state.auth.accessToken, p)
            .then(_ => {
                dispatch(alertActionCreators.alert('更新が完了しました'));
            }).catch(x => {
                dispatch(alertActionCreators.alert('データ更新に失敗しました'));
            });
    };
}
