import { FC, ReactElement, ReactNode, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { NavBar, NumberKeyboard, Tabbar } from 'react-vant'
import { HomeO, GemO, Search, CartO, UserO } from '@react-vant/icons'

import '@/styles/global.less'

export type BaseLayoutProps = {}

type TabbarItem = {
  name: string
  label: string
  icon: ReactNode
}

const tabbarItemList: TabbarItem[] = [
  {
    name: 'home',
    label: '首页',
    icon: <HomeO />,
  },
  {
    name: 'category',
    label: '分类',
    icon: <GemO />,
  },
  {
    name: 'search',
    label: '发现',
    icon: <Search />,
  },
  {
    name: 'cart',
    label: '购物车',
    icon: <CartO />,
  },
  {
    name: 'mine',
    label: '我的',
    icon: <UserO />,
  },
]

const BaseLayout: FC<BaseLayoutProps> = (): ReactElement => {
  const [currentNavBarTitle, setCurrentNavBarTitle] = useState<string>('首页')
  const [currentTabbarName, setCurrentTabbarName] = useState<string | number>('home')

  const navigate = useNavigate()

  const tabbarChangeHandler = (name: string | number) => {
    const index = tabbarItemList.findIndex(item => item.name === name)

    const path = name === 'home' ? '/' : (name as string)

    navigate(path)

    setCurrentNavBarTitle(tabbarItemList[index].label)

    setCurrentTabbarName(name)
  }

  const renderTabbar = (
    <Tabbar value={currentTabbarName} onChange={tabbarChangeHandler} safeAreaInsetBottom={true}>
      {tabbarItemList.map(item => {
        return (
          <Tabbar.Item key={item.name} name={item.name} icon={item.icon}>
            {item.label}
          </Tabbar.Item>
        )
      })}
    </Tabbar>
  )

  return (
    <>
      <NavBar
        safeAreaInsetTop
        leftArrow={false}
        title={currentNavBarTitle}
        border={true}
        fixed={true}
      />
      <div className="app-container">
        <Outlet />
      </div>
      {renderTabbar}
      <NumberKeyboard safeAreaInsetBottom visible={false} />
    </>
  )
}

export default BaseLayout
