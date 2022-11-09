import { Loadable, Loading } from '@/components'

const BaseLayout = Loadable({
  loader: () => import('@/layouts/BaseLayout'),
  loading: <Loading />,
})

const BlankLayout = Loadable({
  loader: () => import('@/layouts/BlankLayout'),
  loading: <Loading />,
})

const UserLayout = Loadable({
  loader: () => import('@/layouts/UserLayout'),
  loading: <Loading />,
})

export { BaseLayout, BlankLayout, UserLayout }
