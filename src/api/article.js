/*
 * @Author: milk
 * @Date: 2022-06-29 18:41:24
 * @LastEditors: 495305046@qq.com
 * @LastEditTime: 2022-06-29 19:00:06
 * @Description: 
 * WeChat:qianmo5269
 */

import request from '@/utils/request';
/**
 * 获取文章列表
 */
export const getArticles = (params) => {
    return request({
        method: 'GET',
        url: '/v1_0/articles',
        params
    })
}