<!--
 * @Author: milk
 * @Date: 2022-06-25 20:27:33
 * @LastEditors: 495305046@qq.com
 * @LastEditTime: 2022-06-29 18:35:31
 * @Description: 
 * WeChat:qianmo5269
-->
<template>
    <div class="home-container">
        <!-- 头部导航 -->
        <van-nav-bar class="page-nav-bar">
            <van-button class="search-btn" slot="title" type="info" size="small" round icon="search">搜索</van-button>
        </van-nav-bar>
        <!-- 频道列表 -->
        <van-tabs class="channel-tab" animated swipeable v-model="active">
            <van-tab :title="channel.name" v-for="channel in channels" :key="channel.id">
                <article-list :channel="channel"></article-list>
            </van-tab>
            <div slot="nav-right" class="placeholder"></div>
            <div slot="nav-right" class="hamburger-btn">
                <i class="toutiao toutiao-gengduo"></i>
            </div>
        </van-tabs>

    </div>
</template>

<script>
import { getUserChannels } from '@/api/user.js'
import ArticleList from './components/article-list.vue'
export default {
    name: 'HomeIndex',
    components: {
        ArticleList
    },
    props: {},
    data() {
        return {
            active: 0,
            channels: []
        }
    },
    computed: {},
    watch: {},
    created() {
        this.loadChannels()
    },
    mounted() { },
    methods: {
        async loadChannels() {
            try {
                const { data } = await getUserChannels()
                this.channels = data.data.channels
            } catch (error) {
                this.$toast('获取频道列表失败')
            }
        }
    }
}
</script>

<style scoped lang="less">
.home-container {
    padding-bottom: 100px;
    .van-nav-bar__title {
        // max-width: unset!important;
        max-width: 100% !important;
    }

    .search-btn {
        width: 555px;
        height: 64px;
        background: #5babfb;
        border: none;
        font-size: 28px;

        .van-icon {
            font-size: 32px;
        }
    }

    /deep/ .channel-tab {
        .van-tabs__wrap {
            height: 82px;
        }

        .van-tab {
            border-right: 1px solid #edeff3;
            min-width: 200px;
            font-size: 30px;
            color: #777;
        }

        .van-tab--active {
            color: #333333;
        }

        .van-tabs__nav {
            padding-bottom: 0;
        }

        .van-tabs__line {
            width: 36px !important;
            height: 6px;
            bottom: 8px;
            background-color: #3296fa;
        }

        .placeholder {
            flex-shrink: 0;
        }

        .hamburger-btn {
            position: fixed;
            right: 0;
            width: 66px;
            height: 82px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0.902;
            background-color: #fff;

            i.toutiao {
                font-size: 33px;
            }
        }
    }
}
</style>
