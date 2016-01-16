import Person from '../models/Person';

export default class LoadPeoplePayload {
    static get TYPE() {
        return 'LOAD_PEOPLE';
    }

    constructor(
        public people: Person[],
        public totalCount: number) {
    }
}
