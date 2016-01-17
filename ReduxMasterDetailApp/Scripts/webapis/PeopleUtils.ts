import Person from '../models/Person';

export default class PeopleUtils {
    static loadPeople(token: string, skip: number, pageSize: number): Promise<Person[]> {
        var url = new Url<{skip: number, pageSize: number}>('/api/People');
        url.query.skip = skip;
        url.query.pageSize = pageSize;
        return fetch(url.toString(), {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(x => {
            if (x.status !== 200) {
                throw new Error(x.status.toString());
            }
            return x.json();
        }).then((x: Person[]) => {
            return x;
        });;
    }

    static count(token: string): Promise<number> {
        return fetch('/api/People/Count', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(x => {
            if (x.status !== 200) {
                throw new Error(x.status.toString());
            }
            return x.json();
        }).then((x: number) => {
            return x;
        });;
    }

    static get(token: string, id: number): Promise<Person> {
        return fetch('api/People/' + id, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(x => {
            if (x.status !== 200) {
                throw new Error(x.status.toString());
            }
            return x.json();
        }).then((x: Person) => x);
    }
}
