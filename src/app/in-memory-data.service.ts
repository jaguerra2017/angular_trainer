import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const states = [
            { id: 0,  name: 'Havana' },
            { id: 11, name: 'Washington' },
            { id: 12, name: 'Paris' }
        ];
        const country = [
            { id: 0,  name: 'Cuba' },
            { id: 11, name: 'Francia' },
            { id: 12, name: 'United States' }
        ];

        const meals = [
            { id: 0,  name: 'Vegetarian' },
            { id: 11, name: 'Eggs' },
            { id: 12, name: 'All' }
        ];

        const formData = {};
        return {'states': states, 'country': country, 'meals': meals, 'formData': formData};
    }
}
