import Person from '../models/Person';

export default class DetailActionPayload {
    static get TYPE() {
        return 'DETAIL';
    }

    constructor(public detail: Person) {
    }
}
