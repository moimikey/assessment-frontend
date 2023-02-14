import { model, Model, modelAction, prop, tProp, types } from 'mobx-keystone'
import { PageOption } from './PageOption'

@model('Data/Variable')
export class Variable extends Model({
    name: prop<string>(),
    type: prop<string>(),
    initialValue: prop<string | number>(),
    value: prop<string | number | undefined>().withSetter(),
    options: tProp(types.array(types.model(PageOption)), () => [])
}) {
    @modelAction
    setVariable (value: string | number | undefined) {
        // console.log('value set from', this.value, 'to', value)
        this.value = value
    }
}
