import React from 'react'
import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Layout } from './components/Layout'

const App = observer(() => {
    return (
        <React.StrictMode>
            <Layout>
                <Outlet />
            </Layout>
        </React.StrictMode>
    )
})

export default App
