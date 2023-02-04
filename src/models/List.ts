import { model, Model, modelAction, prop, types, tProp } from 'mobx-keystone'
import { Component } from './Component'

@model('Data/List')
export class List extends Model({
    id: prop<number>(),
    components: tProp(
        types.array(types.or(types.model(Component), types.array(types.number))),
        () => []
    )
}) {
    @modelAction
    setId (id: number) {
        this.id = id
    }
}
