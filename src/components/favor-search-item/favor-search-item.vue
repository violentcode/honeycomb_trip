<template>
    <div class="favor-house">
        <template v-for="(item, index) in myFavorData" :key="index">
            <div class="item">
                <div class="swiper">
                    <van-swipe class="my-swipe" indicator-color="white">

                        <template v-for="(imgItem, indey) in item.pictureList">
                            <van-swipe-item>
                                <img :src="imgItem" alt="">
                            </van-swipe-item>
                        </template>
                        <!-- 底部指示器 -->
                        <template #indicator="{ active, total }">
                            <div class="bottom">
                                <span class="score">{{item.commentBriefForCD.overall}}分</span>
                                <span class="answer">{{item.commentBriefForCD.scoreTitle}}</span>
                            </div>
                        </template>
                    </van-swipe>
                    <div class="side-bar">
                        <!-- 头像 -->
                        <div class="head-pic">
                            <img :src="item.logoUrl" alt="">
                        </div>
                        <!-- 爱心 -->
                        <div class="love" @click="loveChange(index)">
                            <van-icon name="like" size="22" :color="indexArr.includes(index)? '#FF6666' : '#fff'" />
                        </div>
                        <div class="message">
                            <van-icon name="comment" size="22" color="#fff" />
                            <span class="msg-img">{{item.commentBriefForCD.totalCount}}</span>
                        </div>
                    </div>
                </div>
                <!-- 下方文本 -->
                <div class="content">
                    <!-- 标题和信息相关文本 -->
                    <div class="title-info">
                        <div class="title-msg">
                            <div class="address">{{item.address}}</div>
                            <div class="house-type">{{item.unitSummeries[0].text}}·{{item.unitSummeries[1].text}}</div>
                        </div>
                        <div class="title">
                            {{item.unitName}}
                        </div>
                    </div>

                    <div class="info">
                        <div class="tags">
                            <template v-for="(tag, indez) in item.houseTags" :key="indez">
                                <div class="tag" :style="{color: tag.color, backgroundColor: tag.background.color}">
                                    {{tag.text}}
                                </div>
                            </template>
                        </div>
                        <div class="price">
                            <span class="real-price"><span>￥</span><span
                                    class="real-price-son">{{item.finalPrice}}</span></span>
                            <span class="old-price">￥{{item.productPrice}}</span>
                            <div class="discount" v-if="item.priceTipBadge">
                                <van-icon name="volume" />
                                {{item.priceTipBadge?.text}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
defineProps({
    myFavorData: {
        type: Array,
        default: []
    }
})
// 点击爱心变红色
// 将红色的爱心对应的索引值存在indexArr数组中
const indexArr = ref([])
const loveChange = index => {
    if (indexArr.value.includes(index)) {
        indexArr.value.splice(indexArr.value.indexOf(index), 1)
    } else {
        indexArr.value.push(index)
    }
}

</script>

<style lang="less" scoped>
.favor-house {
    padding: 10px 20px 55px 20px;
    background-color: #F7F8FB;

    .item {
        margin: 10px 0;

        .swiper {
            position: relative;

            .my-swipe {
                position: relative;

                img {
                    width: 100%;
                    border-radius: 5px;
                }

                .bottom {
                    padding: 3px 5px 1px 5px;
                    display: flex;
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    background-color: rgba(255, 255, 255, .9);
                    border-radius: 10px;
                    font-size: 12px;
                    align-items: center;

                    .score {
                        margin-right: 8px;
                        font-weight: 700;
                    }

                    .answer {
                        font-weight: 300;

                    }
                }
            }

            .side-bar {
                position: absolute;
                display: flex;
                flex-direction: column;
                align-items: center;
                right: 10px;
                top: 10px;

                .head-pic {
                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                    }
                }

                .love {
                    margin-top: 15px;
                }

                .message {
                    margin-top: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    .msg-img {
                        color: #fff;
                    }
                }
            }
        }

        .content {
            padding-top: 8px;

            .title-info {

                // display: flex;
                .title-msg {
                    display: flex;
                    align-items: center;

                    .address {
                        padding: 2px 3px 1px 2px;
                        background-color: #333;
                        color: #fff;
                        font-size: 12px;

                    }

                    .house-type {
                        margin-left: 10px;
                        font-size: 12px;
                        color: #666;
                    }
                }

                .title {
                    padding: 8px 0;
                    font-size: 18px;
                }
            }

            .info {
                .tags {
                    display: flex;

                    .tag {
                        padding: 3px 3px 1px 3px;
                        font-size: 12px;
                        border-radius: 2px;
                    }

                    .tag:nth-child(n+2) {

                        margin-left: 5px;
                    }
                }

                .price {
                    padding-top: 5px;
                    display: flex;
                    align-items: center;

                    .real-price {

                        color: var(--primary-color);
                        font-weight: 600;

                        .real-price-son {
                            font-size: 20px;
                        }
                    }

                    .old-price {
                        font-size: 12px;
                        text-decoration: line-through;
                        color: #999;
                        margin: 5px 10px 0;
                    }

                    .discount {
                        // van-icon {
                        //     font-size: 20px;
                        // }

                        padding: 2px 3px 0 3px;
                        background-color: #FB4A4A;
                        font-size: 12px;
                        color: #fff;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
}
</style>