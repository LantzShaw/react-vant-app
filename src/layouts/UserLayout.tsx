import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export type UserLayoutProps = {}

const UserLayout: FC<UserLayoutProps> = (): ReactElement => {
  return <Outlet />
}

export default UserLayout
