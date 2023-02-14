import { model, Model, modelAction, prop } from 'mobx-keystone'

@model('Data/WeatherShort')
export class WeatherShort extends Model({
    condition: prop<string>(''),
    conditionName: prop<string>(''),
    day: prop<string>('')
}) {
    @modelAction
    setWeatherShort (data: WeatherShort) {
        this.condition = data.condition
        this.conditionName = data.conditionName
        this.day = data.day
    }
}
