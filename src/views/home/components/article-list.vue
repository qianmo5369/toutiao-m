<!--
 * @Author: milk
 * @Date: 2022-06-29 18:17:49
 * @LastEditors: 495305046@qq.com
 * @LastEditTime: 2022-06-29 19:48:09
 * @Description: 
 * WeChat:qianmo5269
-->
<template>
    <div class="article-list">
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh" success-text="刷新成功">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" :error.sync="error"
                error-text="请求失败，点击重新加载" @load="onLoad">
                <van-cell v-for="(item, index) in list" :key="index" :title="item.title" />
            </van-list>
        </van-pull-refresh>
    </div>

</template>

<script>
import { getArticles } from "@/api/article";
export default {
    name: "ArticleList",
    components: {},
    props: {
        channel: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            list: [],
            loading: false,
            finished: false,
            error: false,
            refreshing: false,
            timestamp: null,
        };
    },
    methods: {
        async onLoad() {
            try {
                const { data } = await getArticles({
                    channel_id: this.channel.id,
                    timestamp: this.timestamp || Date.now(),
                });

                const { results } = data.data;
                this.list.push(...results);

                this.loading = false;
                if (results.length) {
                    this.timestamp = data.data.pre_timestamp;
                } else {
                    this.finished = true;
                }
            } catch (error) {
                this.$toast("请求失败1");
                this.error = true;
                this.loading = false;
            }
        },
        async onRefresh() {
            try {
                const { data } = await getArticles({
                    channel_id: this.channel.id,
                    timestamp: Date.now(),
                });

                const { results } = data.data;
                this.list.unshift(...results);
                this.refreshing = false
                
            } catch (error) {
                this.$toast("请求失败1");
            }
        },
    },
};
</script>

<style>
</style>