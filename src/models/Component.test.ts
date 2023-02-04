import { Component } from './Component'

describe('Model', () => {
    describe('Component', () => {
        test('Valid input', () => {
            const model = new Component({
                id: 0,
                type: 'image',
                options: {
                    src: '/locations/new-york.png',
                    alt: 'Cartoon of New York skyline'
                }
            })
            expect(model).toMatchObject({
                id: 0,
                type: 'image',
                options: {
                    src: '/locations/new-york.png',
                    alt: 'Cartoon of New York skyline'
                }
            })
        })
    })
})
