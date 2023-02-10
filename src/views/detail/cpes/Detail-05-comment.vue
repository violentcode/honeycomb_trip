<template>
    <div class="detail-comment">
        <DetailSection title="房客点评" :more="`查看全部${commentModule.totalCount}条评价`">
            <!-- 顶部评分 -->
            <div class="score">
                <div class="left">
                    <div class="text">{{commentModule.overall.toFixed(1)}}</div>
                    <div class="line">
                    </div>
                    <div class="info">
                        <div class="title">{{commentModule.scoreTitle}}</div>
                        <div class="count">{{commentModule.totalCount}}条评论</div>
                        <div class="star">
                            <van-rate v-model="value" readonly allow-half size="12px" color="#ff9854" />
                        </div>
                    </div>
                </div>

                <div class="right">
                    <template v-for="(item, index) in commentModule.subScores">
                        <span class="score-item">
                            {{item}}
                        </span>
                    </template>
                </div>
            </div>

            <!-- 中间评论部分 -->
            <div class="evaluate">
                <template v-for="(item, index) in commentModule.commentTagVo">
                    <span class="item" :style="{color: item.color, backgroundColor: item.backgroundColor}">
                        {{item.text}}
                    </span>
                </template>
            </div>

            <!-- 个人评论 -->
            <div class="personal-evaluation">
                <div class="user">
                    <div class="avatar">
                        <img :src="commentModule.comment.userAvatars" alt="">
                    </div>
                    <div class="profile">
                        <div class="name">{{commentModule.comment.userName}}</div>
                        <div class="date">{{commentModule.comment.checkInDate}}</div>
                    </div>
                </div>
                <div class="text">
                    {{commentModule.comment.commentDetail}}
                </div>
            </div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
import { ref } from 'vue';

const props = defineProps({
    commentModule: {
        type: Object,
        default: () => ({})
    }
})

const value = ref(props.commentModule.overall)

</script>

<style lang="less" scoped>
.detail-comment {

    .score {
        display: flex;
        justify-content: space-between;
        padding-top: 12px;

        .left {
            position: relative;
            display: flex;
            color: #333;
            width: 160px;

            .text {
                font-size: 48px;
                font-weight: 700;
                z-index: 5;

            }

            .line {
                width: 62px;
                height: 6px;
                bottom: 10px;
                background-image: linear-gradient(90deg, #fa8c1d, #fcaf3f);
                border-radius: 3px;
                position: absolute;
            }

            .info {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: center;
                margin-left: 12px;

                .title {
                    font-size: 12px;
                }

                .count {
                    font-size: 12px;
                    color: #666;
                }


            }
        }


        .right {
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            justify-content: flex-end;
            color: #666;

            .score-item {

                margin-left: 5px;
                font-size: 12px;
                color: #666;
            }
        }
    }

    .evaluate {
        display: flex;
        flex-wrap: wrap;
        font-size: 12px;
        margin-top: 8px;

        .item {
            margin-left: 5px;
            margin-top: 5px;
            padding: 3px;
            border-radius: 20px;
        }
    }

    .personal-evaluation {
        margin-top: 10px;
        padding: 8px;
        background-color: #F7F9FB;
        border-radius: 5px;

        .user {
            display: flex;

            .avatar {
                margin-right: 8px;

                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 16px;
                }
            }

            .profile {
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .date {
                    font-size: 12px;
                    color: #999;
                }
            }


        }

        .text {
            margin-top: 25px;
            font-size: 12px;
            color: #333;
        }
    }
}
</style>