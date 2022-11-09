// import { lazy, ReactElement, Suspense } from 'react'
// import Loadable from 'react-loadable'

import { Loading, Loadable } from '@/components'

const Home = Loadable({
  loader: () => import('@/views/Home'),
  loading: <Loading />,
})

const Profile = Loadable({
  loader: () => import('@/views/Profile'),
  loading: <Loading />,
})

const SignIn = Loadable({
  loader: () => import('@/views/SignIn'),
  loading: <Loading />,
})

const SignUp = Loadable({
  loader: () => import('@/views/SignUp'),
  loading: <Loading />,
})

const NotFound = Loadable({
  loader: () => import('@/views/NotFound'),
  loading: <Loading />,
})

export { Home, Profile, SignIn, SignUp, NotFound }

// function Lazy(path: string) {
//   const Component = lazy(() => import(`@/views${path}`))

//   return (
//     <Suspense fallback={<div>loading...</div>}>
//       <Component />
//     </Suspense>
//   )
// }
