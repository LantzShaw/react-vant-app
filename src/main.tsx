import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import router from '@/routes'
import store from './store'

const element = (
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

root.render(element)
