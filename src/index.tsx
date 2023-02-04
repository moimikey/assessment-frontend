import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './app'
import Error from './error'
import { Page } from './page'
import { createRootStore, StoreProvider } from './store'
import './index.css'

const root = createRootStore()
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { index: true, element: <Page /> },
            {
                path: '/page',
                children: [{ path: '/page/:id', element: <Page /> }]
            },
            { path: '*', element: <Error /> }
        ]
    }
])

const rootEl: HTMLElement | null = document.getElementById('root')

rootEl &&
    ReactDOM.createRoot(rootEl).render(
        <React.StrictMode>
            <StoreProvider value={root}>
                <RouterProvider router={router} />
            </StoreProvider>
        </React.StrictMode>
    )
