/*
 * @Author: milk
 * @Date: 2022-06-24 15:40:09
 * @LastEditors: 495305046@qq.com
 * @LastEditTime: 2022-06-25 19:08:46
 * @Description: 
 * WeChat:qianmo5269
 */
import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem, removeItem } from '@/utils/storage'
Vue.use(Vuex)

const TOKEN_KEY = 'TOUTIAO_USER'

export default new Vuex.Store({
  state: {
    user: getItem(TOKEN_KEY) || {},
  },
  getters: {
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      setItem(TOKEN_KEY, data)
    }
  },
  actions: {
  },
  modules: {
  }
})
