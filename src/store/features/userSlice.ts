import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user', // 命名空间，在调用action的时候会默认的设置为action的前缀
  initialState: {
    isRememberMe: false,
  },
  reducers: {
    login(state, { payload }) {
      // 内置了immutable
      state.isRememberMe = false

      console.log('=========payload==========', payload)
    },
  },
})

// redux-toolkit内置了thunk插件，不再需要单独安装，可以直接处理异步的action。
// 内置了thunk插件，可以直接处理异步请求
// export const asyncIncrement = payload => dispatch => {
//   setTimeout(() => {
//     dispatch(increment(payload))
//   }, 2000)
// }

// 导出actions
export const { login } = userSlice.actions

// 导出reducer，在创建store时使用到
export default userSlice.reducer

// 创建slice
// 使用createSlice方法创建一个slice。每一个slice里面包含了reducer和actions，可以实现模块化的封装。所有的相关操作都独立在一个文件中完成。
// 关键属性:
// （1）name
// 命名空间，可以自动的把每一个action进行独立，解决了action的type出现同名的文件。在使用的时候默认会把使用name/actionName
// （2）initialState
// state数据的初始值

// （3）reducers
// 定义的action。由于内置了immutable插件，可以直接使用赋值的方式进行数据的改变，不需要每一次都返回一个新的state数据
