import { Root } from './Root'

describe('Model', () => {
    describe('Root', () => {
        test('Valid input', () => {
            const model = new Root({})
            expect(model).toMatchObject({
                components: [],
                lists: [],
                variables: [],
                weatherData: {}
            })
        })
    })
})
