import AuthInfo from '../models/AuthInfo';

/**
 * 認証のアクションの情報
 */
export default class AuthPayload {
    /**
     * 認証のタイプを返す
     */
    static get TYPE() {
        return 'AUTH';
    }

    constructor(
        public authInfo: AuthInfo) {
    }
}