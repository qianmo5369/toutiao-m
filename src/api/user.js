/*
 * @Author: milk
 * @Date: 2022-06-25 14:41:57
 * @LastEditors: 495305046@qq.com
 * @LastEditTime: 2022-06-30 19:15:46
 * @Description: 用户请求相关模块
 * WeChat:qianmo5269
 */
import request from '@/utils/request'

export const login = data => {
    return request({
        method: 'POST',
        url: '/v1_0/authorizations',
        data
    })
}
// 发送验证码 /v1_0/verifications/cellphone
export const sendCode = phone => {
    return request({
        method: 'GET',
        url: `/v1_0/sms/codes/${phone}`
    })
}
/**
 * 获取用户自己的信息
 */
export const getUserInfo = () => {
    return request({
        method: 'GET',
        url: '/v1_0/user'
        // 发送请求头数据
        // headers: {
        // //   // 注意：该接口需要授权才能访问
        // //   //       token的数据格式：Bearer token数据，注意 Bearer 后面有个空格
        //   Authorization: `Bearer ${store.state.user.token}`
        // }
    })
}
/**
 * 获取频道列表
 */
export const getUserChannels = () => {
    return request({
        method: 'GET',
        url: 'v1_0/user/channels'
    })
}   