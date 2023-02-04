import { Weather } from './Weather'

describe('Model', () => {
    describe('Weather', () => {
        test('Valid input', () => {
            const model = new Weather({
                condition: '',
                conditionName: '',
                lat: '',
                location: '',
                locationImage: '',
                lon: '',
                temperature: 78,
                unit: ''
            })
            expect(model).toMatchObject({
                temperature: 78
            })
        })
    })
})
