import * as actions from './';
import SetFetchingPayload from './SetFetchingPayload';

/**
 * WebAPIの呼び出し中かどうかを設定する
 * @param fetching
 */
export function setFetching(fetching: boolean): actions.Action<SetFetchingPayload> {
    return {
        type: SetFetchingPayload.TYPE,
        payload: new SetFetchingPayload(fetching)
    };
}
