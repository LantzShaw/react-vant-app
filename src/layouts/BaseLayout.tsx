import { FC, ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar, NumberKeyboard } from 'react-vant'

import '@/styles/global.less'

export type BaseLayoutProps = {}

const BaseLayout: FC<BaseLayoutProps> = (): ReactElement => {
  return (
    <>
      <NavBar safeAreaInsetTop leftArrow={false} title="首页" border={true} fixed={true} />
      <div className="app-container">
        <Outlet />
      </div>
      <NumberKeyboard safeAreaInsetBottom visible={false} />
    </>
  )
}

export default BaseLayout
