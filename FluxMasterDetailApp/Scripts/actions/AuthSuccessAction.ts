export default class AuthSuccessAction {
    constructor(
        public accessToken: string,
        public userName: string) {
    }
}