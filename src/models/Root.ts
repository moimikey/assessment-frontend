import axios from 'axios'
import { model, Model, tProp, types, modelFlow, _async, _await } from 'mobx-keystone'
import { List } from './List'
import { Component } from './Component'
import { Variable } from './Variable'
import { Weather } from './Weather'
import { WeatherShort } from './WeatherShort'

@model('Class/Root')
export class Root extends Model({
    lists: tProp(types.array(types.model(List)), () => []).withSetter(),
    components: tProp(types.array(types.model(Component)), () => []).withSetter(),
    variables: tProp(types.array(types.model(Variable)), () => []).withSetter(),
    activeListId: tProp(types.number, () => 0).withSetter()
}) {
    onAttachedToRootStore () {
        console.log('Root store attached.')
    }

    @modelFlow
    fetchWeatherData = _async(function* (this: Weather, options: { lat: string; lon: string }) {
        // @ts-expect-error
        const response: any = yield* _await(() =>
            axios.get(
                `http://localhost:3030/integration/weather?lon=${options.lon}&lat=${options.lat}`
            )
        )

        const resp = yield response()
        const weather = new Weather({
            ...resp?.data?.data,
            upcomming: resp?.data?.data?.upcomming.map((c: any) => new WeatherShort(c))
        })

        return weather
    })

    @modelFlow
    fetchPageProps = _async(function* (this: Root, id: string) {
        // @ts-expect-error
        const response: any = yield* _await(() => axios.get(`http://localhost:3030/page/${id}`))
        const resp = yield response()
        const body = resp?.data?.data

        this.activeListId = 0
        this.components = body.components?.map((c: any) => new Component(c))
        this.lists = body.lists?.map(
            (l: List) =>
                new List({
                    id: l.id,
                    components: l.components?.map((c: any) => {
                        return (
                            new Component(
                                JSON.parse(
                                    JSON.stringify(this.components?.find((x: any) => x.id === c)?.$)
                                )
                            ) || new Component({ id: 0, options: {}, type: '' })
                        )
                    })
                })
        )
        this.variables = body.variables?.map((v: any) => new Variable(v))

        return {
            lists: this.lists,
            components: this.components,
            variables: this.variables,
            activeListId: this.activeListId
        }
    })
}
