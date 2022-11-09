import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'

export type BlankLayoutProps = {}

const BlankLayout: FC<BlankLayoutProps> = (): ReactElement => {
  return <Outlet />
}

export default BlankLayout
