import axios, { AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios'
// import { Toast } from 'vant'

// import { useUserStore } from '@/store/modules/user'
// import router from '@/router'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

const { CancelToken } = axios
const httpPending: Array<{
  u: string
  f: Function
}> = [] // 用于存储每个ajax请求的取消函数和ajax标识

/**
 * 取消请求
 * @param {AxiosRequestConfig} config
 */
const cancelHttp = (config: AxiosRequestConfig = {}) => {
  const url: string | undefined = config.url?.substring(0, config.url.indexOf('?'))

  httpPending.forEach((e, i) => {
    if (e.u === `${url}&${config.method}`) {
      // 当前请求在数组中存在时执行函数体
      e.f() // 执行取消操作
      httpPending.splice(i, 1) // 把这条记录从数组中移除
    }
  })
}

/**
 * 确认请求状态
 * @param {AxiosResponse} response
 */
const checkStatus = (response: AxiosResponse) => {
  if (!response.data) {
    // Toast.fail('网络异常')
  }

  if (response.status >= 200 && response.status < 300) {
    return response.data
  }
}

/**
 * 处理响应状态
 *
 * @param { AxiosError } error
 */
const err = (error: AxiosError) => {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        console.log('错误请求')
        break
      case 401:
        console.log('未授权，请重新登录')
        break
      case 403:
        console.log('拒绝访问')
        break
      case 404:
        console.log('请求错误,未找到该资源')
        break
      case 405:
        console.log('请求方法未允许')
        break
      case 408:
        console.log('请求超时')
        break
      case 411:
        console.log('需要知道长度')
        break
      case 413:
        console.log('请求的实体太大')
        break
      case 414:
        console.log('请求的URL太长')
        break
      case 415:
        console.log('不支持的媒体类型')
        break
      case 500:
        console.log('服务器端出错')
        break
      case 501:
        console.log('网络未实现')
        break
      case 502:
        console.log('网络错误')
        break
      case 503:
        console.log('服务不可用')
        break
      case 504:
        console.log('网络超时')
        break
      case 505:
        console.log('http版本不支持该请求')
        break
      default:
        console.log(`系统提示${error.response.status}`)
    }
  } else {
    console.log('连接到服务器失败')
  }

  Promise.reject(error)
}

// 创建axios实例
const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // `withCredentials` 表示跨域请求时是否需要使用凭证  是否有证书
  timeout: 30000,
  // transformRequest: [
  //   function (data, headers) {
  //     // 对 data 进行任意转换处理
  //     return data
  //   },
  // ],

  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  // transformResponse: [
  //   function (data) {
  //     // 对 data 进行任意转换处理
  //     return data
  //   },
  // ],

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  // data: method === 'post' ? params || {} : {},

  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  // responseType: 'json', // default
})

// NOTE: 也可以通过 这种方式设置transformRequest、
// axiosInstance.defaults.transformRequest = data => {
//   return qs.stringify(data)
// }

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 取消上一次未完成的相同请求，注意项目中是否存在风险
    cancelHttp(config)

    const token = localStorage.getItem('token')
    if (token) {
      // @ts-ignore
      config.headers['X-Access-Token'] = token
    }

    return config
  },
  error => {
    Promise.reject(error)
  }
)

// 响应拦截器
axiosInstance.interceptors.response.use((response: AxiosResponse) => {
  cancelHttp(response.config)

  return checkStatus(response)
}, err)

export default axiosInstance
