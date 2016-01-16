/**
 * WebAPIの呼び出し中かを設定する
 */
export default class SetFetchingPayload {
    static get TYPE() {
        return 'SET_FETCHING';
    }

    constructor(
        public fetching: boolean) {
    }
}
