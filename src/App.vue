<!--
 * @Author: milk
 * @Date: 2022-06-24 15:40:09
 * @LastEditors: 495305046@qq.com
 * @LastEditTime: 2022-06-25 20:22:41
 * @Description: 
 * WeChat:qianmo5269
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    }
  }
};
</script>

<style scoped lang="less">
</style>
