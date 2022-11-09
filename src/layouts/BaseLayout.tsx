import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export type BaseLayoutProps = {}

const BaseLayout: FC<BaseLayoutProps> = (): ReactElement => {
  return <Outlet />
}

export default BaseLayout
