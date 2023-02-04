import { model, Model, prop } from 'mobx-keystone'

@model('Data/PageOption')
export class PageOption extends Model({
    name: prop<string>(),
    type: prop<string>(),
    initialValue: prop<string>()
}) {}
