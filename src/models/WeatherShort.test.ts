import { WeatherShort } from './WeatherShort'

describe('Model', () => {
    describe('WeatherShort', () => {
        test('Valid input', () => {
            const model = new WeatherShort({
                condition: 'cloudy',
                conditionName: 'Cloudy',
                day: 'Fri'
            })
            expect(model).toMatchObject({
                condition: 'cloudy',
                conditionName: 'Cloudy',
                day: 'Fri'
            })
        })
    })
})
