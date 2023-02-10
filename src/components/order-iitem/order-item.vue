<template>
    <div class="order-item">
        <template v-for="(item, index) in orderList" :key="item.orderId">
            <div class="item">
                <!-- 顶部标题以及状态 -->
                <div class="order-title">
                    <div class="title-name">{{item.unitName}}</div>
                    <!-- 状态 -->
                    <div class="status-name" :style="{color: item.orderStatusDescColor}"
                        v-if="!cancelList.includes(index)">{{item.orderStatusDesc}}
                        <span class="status-why">{{item.cancelReasonDesc}}</span>
                    </div>
                    <!-- 如果超时显示已取消,这边先写死,按理来说服务器会返回数据 -->
                    <div class="cancel-name" :style="{color: '#B2B2B2'}" v-else>
                        已取消<span class="status-why">（支付超时)</span>
                    </div>
                </div>

                <!-- 中间图片以及相关信息 -->
                <div class="order-info">
                    <div class="img-bg">
                        <img :src="item.unitPicture" alt="">
                    </div>
                    <div class="bottom">
                        <div class="left">
                            <div class="date-start">
                                <div class="day">{{ mouthDay(item.checkInDate)}}</div>
                                <div class="week">周{{week(item.checkInDate)}} {{item.checkInLatestTime}}</div>
                            </div>
                            <img src="@/assets/img/order/icon_right_orderlist.png" alt="" class="arrow">
                            <div class="date-end">
                                <div class="day">{{mouthDay(item.checkOutDate) }} </div>
                                <div class="week">周{{week(item.checkOutDate)}} {{item.checkOutLatestTime}}</div>
                            </div>
                        </div>
                        <div class="total-price">
                            <div class="text">支付总价</div>
                            <div class="price">￥{{item.prepayAmount}}</div>
                        </div>
                    </div>
                </div>

                <!-- 底部内容 -->
                <div class="order-btn">
                    <div class="left-content" v-if="item.orderStatus === 1  && !cancelList.includes(index)">
                        <img src="@/assets/img/order/icon-time.png" alt="" class="icon-time">
                        <span class="time">{{countDown(item.countdown,index)}}分</span>
                        <span class="msg">{{item.summary}}</span>
                    </div>
                    <div v-else></div>

                    <div class="right-wait" v-if="item.orderStatus === 1 && !cancelList.includes(index)">
                        <button class="contact">
                            联系房东
                        </button>
                        <button class="pay">
                            去支付
                        </button>
                    </div>
                    <div class="right-cancel" v-else>
                        <button class="remove">
                            删除
                        </button>
                        <button class="again">
                            再次预定
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup>
import { computed, ref } from '@vue/reactivity';
import dayjs from 'dayjs';
import weekDay from "@/hooks/weekDay"
import { onMounted } from 'vue';
// 父传子
defineProps({
    orderList: {
        type: Array,
        default: []
    }
})
// 将时间转化成几月几日
const mouthDay = computed(() => {
    return time => {
        return dayjs(time).format("MM月DD日")
    }
})
// 将时间转化成周
const week = computed(() => {
    return time => {
        const weekTime = new Date(time).getDay()
        return weekDay(weekTime)
    }
})
const cancelList = ref([])
// 设置几分后自动取消
const count = ref(1)
const countDown = computed(() => {
    return (time, index) => {
        if (time - count.value <= 0) {
            cancelList.value.push(index)
        }

        return Number.parseInt((time - count.value) / 60)
    }
})
// 挂载时开始计时
onMounted(() => {
    setInterval(() => {
        count.value++
    }, 1000);
})

</script>

<style lang="less" scoped>
.order-item {
    .item {
        margin-top: 10px;
        padding: 0 20px;
        background-color: #fff;

        .order-title {
            display: flex;
            padding: 20px 0;
            align-items: center;
            justify-content: space-between;

            .title-name {
                font-size: 12px;
                max-width: 204px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;


            }

            .status-name {
                font-size: 18px;

                .status-why {
                    font-size: 12px;
                }
            }

            .cancel-name {
                font-size: 18px;

                .status-why {
                    font-size: 12px;
                }
            }
        }

        .order-info {
            position: relative;

            .img-bg {

                img {
                    width: 100%;
                    border-radius: 8px;

                }
            }

            .bottom {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: space-between;
                bottom: 0;
                left: 0;
                right: 0;
                background-color: rgba(0, 0, 0, .6);
                color: #fff;
                border-radius: 0 0 8px 8px;
                height: 60px;

                .left {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex: 1;

                    .day {
                        font-size: 16px;

                    }

                    .week {
                        margin-top: 5px;
                        font-size: 12px;
                        color: #f5f5f5;
                    }

                    .arrow {
                        width: 16px;
                        height: 12px;
                    }
                }

                .total-price {
                    position: relative;
                    width: 105px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    .price {
                        color: var(--primary-color);
                        font-size: 16px;
                    }

                    .text {
                        color: #f5f5f5;
                        margin-bottom: 2px;
                    }

                    ::before {
                        position: absolute;
                        top: 10px;
                        left: -5px;
                        content: "";
                        width: 1px;
                        height: 70%;
                        background-color: #fff;
                    }
                }
            }
        }

        .order-btn {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 0;

            .left-content {
                display: flex;
                align-items: center;
                font-size: 12px;

                .time {
                    padding: 0 2px;
                    color: var(--primary-color);
                }

                .msg {
                    color: #666;

                }

                .icon-time {
                    margin-bottom: 4px;

                    width: 11px;
                    height: 11px;
                    vertical-align: middle;
                }
            }

            .right-wait {
                .contact {
                    width: 75px;
                    height: 34px;
                    border-radius: 6px;
                    border: 1px solid #e9e9e9;
                    background-color: #fff;
                    color: #666;
                }

                .pay {
                    width: 75px;
                    height: 34px;
                    margin-left: 12px;
                    border-radius: 6px;
                    border: 1px solid #e9e9e9;
                    background-color: var(--primary-color);
                    color: #fff;

                }
            }

            .right-cancel {
                .remove {
                    width: 75px;
                    height: 34px;
                    border-radius: 6px;
                    border: 1px solid #e9e9e9;
                    background-color: #fff;
                    color: #666;
                }

                .again {
                    width: 75px;
                    height: 34px;
                    margin-left: 12px;
                    border-radius: 6px;
                    border: 1px solid var(--primary-color);
                    background-color: #fff;
                    color: var(--primary-color);
                }
            }
        }
    }
}
</style>