import { model, Model, modelAction, prop, types, tProp } from 'mobx-keystone'
import { WeatherShort } from './WeatherShort'

@model('Data/Weather')
export class Weather extends Model({
    condition: prop<string>(),
    conditionName: prop<string>(),
    lat: prop<string>(''),
    location: prop<string>(),
    locationImage: prop<string>(),
    lon: prop<string>(''),
    temperature: prop<number>(),
    unit: prop<string>(),
    upcomming: tProp(types.array(types.maybe(types.model(WeatherShort))), () => [])
}) {
    @modelAction
    setWeather (data: Weather) {
        this.condition = data.condition
        this.conditionName = data.conditionName
        this.lat = data.lat
        this.location = data.location
        this.locationImage = data.locationImage
        this.lon = data.lon
        this.temperature = data.temperature
        this.unit = data.unit
        this.upcomming = data.upcomming
    }
}
