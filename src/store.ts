import { ModelAutoTypeCheckingMode, registerRootStore, setGlobalConfig } from 'mobx-keystone'
import { Root as RootStore, Weather } from './models'
import React from 'react'

setGlobalConfig({
    modelAutoTypeChecking: ModelAutoTypeCheckingMode.AlwaysOn
})

export function createRootStore (): RootStore {
    const rootStore = new RootStore({
        components: [],
        lists: [],
        variables: []
    })

    registerRootStore(rootStore)

    return rootStore
}

const StoreContext = React.createContext<RootStore>({} as RootStore)

export const useStore: () => RootStore = () => React.useContext(StoreContext) as RootStore
export const StoreProvider = StoreContext.Provider
