<!--
 * @Author: milk
 * @Date: 2022-06-30 21:18:19
 * @LastEditors: 495305046@qq.com
 * @LastEditTime: 2022-07-01 01:39:04
 * @Description: 
 * WeChat:qianmo5269
-->
<template>
    <van-cell class="article-item">
        <div slot="title" class="title van-multi-ellipsis--l2">
            {{ article.title }}
        </div>
        <div slot="label">
            <div class="cover-wrap" v-if="article.cover.type === 3">
                <div class="cover-item" v-for="(img, index) in article.cover.images" :key="index">
                    <van-image class="cover-item-img" fit="cover" :src="img" />
                </div>
            </div>
            <div class="label-info-wrap">
                <span>{{ article.aut_name }}</span>
                <span>{{ article.comm_count }}评论</span>
                <span>{{ article.pubdate }}</span>
            </div>
        </div>
        <div v-if="article.cover.type === 1" slot="default">
            <van-image class="right-cover" fit="cover" :src="article.cover.images[0]" />
        </div>
    </van-cell>
</template>

<script>
export default {
    name: 'ArticleItem',
    components: {

    },
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    }
}
</script>

<style lang="less" scoped>
.article-item {
    .title {
        font-size: 32px;
        color: #3a3a3a;
    }

    .van-cell__value {
        flex: unset;
        width: 232px;
        height: 146px;
        padding-left: 25px;
    }

    .right-cover {
        width: 232px;
        height: 146px;
    }
    .label-info-wrap span{
        font-size: 22px;
        color: #b4b4b4;
        margin-right: 25px;
    }
    .cover-wrap{
        display: flex;
        &:not(:last-child){
            padding-right: 4px;
        }
        .cover-wrap{
            flex: 1;
            height: 146px;
        }
        .cover-item-img{
            width: 100%;
            height: 146px;
        }
    }
}
</style>