import { PageOption } from './PageOption'

describe('Model', () => {
    describe('PageOption', () => {
        test('Valid input', () => {
            const model = new PageOption({ name: 'Test', type: 'Test', initialValue: 'Test' })
            expect(model).toMatchObject({
                name: 'Test',
                type: 'Test',
                initialValue: 'Test'
            })
        })
    })
})
