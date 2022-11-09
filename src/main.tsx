import React from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import router from '@/routes'

const element = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

const container = document.getElementById('root') as HTMLElement

const root = createRoot(container)

root.render(element)
