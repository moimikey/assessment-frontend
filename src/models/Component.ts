import { model, Model, modelAction, prop } from 'mobx-keystone'

export type ComponentOptions = { [key: string]: any }

@model('Data/Component')
export class Component extends Model({
    id: prop<number>(),
    type: prop<string>(),
    options: prop<ComponentOptions>()
}) {
    @modelAction
    setId (id: number) {
        this.id = id
    }
}
