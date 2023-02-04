import { model, Model, modelAction, prop } from 'mobx-keystone'

@model('Data/WeatherShort')
export class WeatherShort extends Model({
    condition: prop<string>('').withSetter(),
    conditionName: prop<string>('').withSetter(),
    day: prop<string>('').withSetter()
}) {
    @modelAction
    setWeatherShort (data: WeatherShort) {
        this.condition = data.condition
        this.conditionName = data.conditionName
        this.day = data.day
    }
}
