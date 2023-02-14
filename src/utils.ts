import { Component, Variable } from './models'

export const getVariableByName = (variables: Variable[], name: string) => {
    return variables.find((v: Variable) => v.name === name)
}

export const getComponentById = (components: Component[], id: number) => {
    return components.find((c: Component) => id === c.id)
}

export const getComponentCondition = (component: Component) => {
    return component.options.condition
}
