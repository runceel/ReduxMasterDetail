import * as actions from './';
import * as Redux from 'redux';
import AlertPayload from './AlertPayload';

function setAlert(message: string): actions.Action<AlertPayload> {
    return {
        type: AlertPayload.TYPE,
        payload: new AlertPayload(message)
    };
}

export function alert(message: string) {
    return (dispatch: Redux.Dispatch) => {
        dispatch(setAlert(message));
        dispatch(setAlert(null));
    }; 
}
