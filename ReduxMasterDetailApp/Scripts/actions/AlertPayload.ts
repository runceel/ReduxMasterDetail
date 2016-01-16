export default class AlertPayload {
    static get TYPE() {
        return 'ALERT';
    }

    constructor(public message: string) { }
}
