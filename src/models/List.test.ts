import { Component } from './Component'
import { List } from './List'

describe('Model', () => {
    describe('List', () => {
        test('Valid input', () => {
            const model = new List({
                id: 0,
                components: [
                    new Component({
                        id: 1,
                        type: 'image',
                        options: {
                            src: '/locations/new-york.png',
                            alt: 'Cartoon of New York skyline'
                        }
                    })
                ]
            })
            expect(model).toMatchObject({
                id: 0,
                components: [
                    {
                        id: 1,
                        type: 'image',
                        options: {
                            src: '/locations/new-york.png',
                            alt: 'Cartoon of New York skyline'
                        }
                    }
                ]
            })
        })
    })
})
