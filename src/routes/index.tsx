import { createBrowserRouter } from 'react-router-dom'

import App from '@/App'

import { BaseLayout, BlankLayout, UserLayout } from '@/layouts'
import { Home, Profile, SignIn, SignUp, NotFound } from '@/views'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: BaseLayout,
        children: [
          {
            element: Home,
            index: true,
          },
          {
            element: Profile,
            path: '/profile',
          },
        ],
      },
      {
        path: '/orgz/member',
        element: UserLayout,
        children: [
          {
            path: 'login',
            element: SignIn,
          },
          {
            path: 'reg',
            element: SignUp,
          },
        ],
      },
      {
        path: '*',
        element: NotFound,
      },
    ],
  },
])

export default router
