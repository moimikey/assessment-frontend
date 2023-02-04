import { model, Model, prop, tProp, types } from 'mobx-keystone'
import { PageOption } from './PageOption'

@model('Data/Variable')
export class Variable extends Model({
    name: prop<string>(),
    type: prop<string>(),
    options: tProp(types.array(types.model(PageOption)), () => [])
}) {}
