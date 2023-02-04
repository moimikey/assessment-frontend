import request from 'supertest'
import app from './app'
import VALUES from './values'
import PAGES from './pages'

describe('API', () => {
    describe('GET page', () => {
        for (const { id, data } of PAGES) {
            test(id, async () => {
                const response = await request(app)
                    .get(`/page/${id}`)
                    .expect('Content-Type', /json/)
                expect(response.status).toEqual(200)
                expect(response.body).toEqual({ data })
            })
        }

        test('Not Found', async () => {
            const response = await request(app).get('/page/other').expect('Content-Type', /json/)
            expect(response.status).toEqual(404)
            expect(response.body).toEqual({
                error: 'Page Not Found'
            })
        })
    })

    describe('Integrations', () => {
        describe('Weather', () => {
            for (const data of VALUES.WEATHER_LOCATIONS) {
                const { lon, lat } = data
                test(`${lon},${lat}`, async () => {
                    const response = await request(app)
                        .get('/integration/weather')
                        .query({ lon, lat })
                        .expect('Content-Type', /json/)
                    expect(response.status).toEqual(200)
                    expect(response.body).toEqual({
                        data
                    })
                })
            }

            test('0,0', async () => {
                const response = await request(app)
                    .get('/integration/weather')
                    .query({ lon: '0', lat: '0' })
                    .expect('Content-Type', /json/)
                expect(response.status).toEqual(404)
                expect(response.body).toEqual({
                    error: 'Weather Not Available For Coordinates'
                })
            })
        })
    })
})
