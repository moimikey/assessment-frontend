import { Variable } from './Variable'

describe('Model', () => {
    describe('Variable', () => {
        test('Valid input', () => {
            const model = new Variable({ name: 'Test', type: 'Test', initialValue: 'Test' })
            expect(model).toMatchObject({
                name: 'Test',
                type: 'Test',
                initialValue: 'Test'
            })
        })
    })
})
