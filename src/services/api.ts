/**
 * @Author Lantz
 * @Date 2022.10.19
 * @Email lantzshaw@163.com
 */

import request from '@/utils/request'

/**
 * GET
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export function get<T = any>(url: string, params: T) {
  return request({
    url: url,
    params: params,
    method: 'GET',
  })
}

/**
 * POST
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export function post<T = any>(url: string, params: T) {
  return request({
    url: url,
    method: 'POST',
    data: params,
    headers: { 'Content-Type': 'application/json' },
  })
}

/**
 * PUT
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export function put<T = any>(url: string, params: T) {
  return request({
    url: url,
    method: 'PUT',
    data: params,
  })
}

/**
 * DELETE
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export function del<T = any>(url: string, params: T) {
  return request({
    url: url,
    method: 'DELETE',
    params: params,
  })
}

/**
 * POST
 * @param {String} url
 * @param {Object} params
 * @return {Promise<Object>} Promise
 */
export function upload<T = any>(url: string, params: T) {
  return request({
    url: url,
    method: 'POST',
    data: params,
    headers: {
      'Content-Type': `application/x-www-form-urlencoded; charset=UTF-8`,
    },
    /**
     * NOTE: 根据具体情况而定，例如：下载文件，后端返回是Blob
     * 那可以在此处设置responseType: 'blob'
     */
    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    // responseType: 'json', // default
  })
}
