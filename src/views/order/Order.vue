<template>
    <div class="order">
        <div class="top-fixd">
            <!-- tab-bar -->
            <div class="tab-bar">
                <van-nav-bar left-arrow @click-left="onClickLeft" title="订单列表">
                    <template #right>
                        <van-icon name="wap-nav" size="24" />
                    </template>
                </van-nav-bar>
            </div>

            <!-- tabs -->
            <van-tabs v-model:active="activeName" color="#ff9854" title-active-color="#ff9854" @click-tab="onClickTab">
                <van-tab title="全部订单" name="a">
                </van-tab>
                <van-tab title="近期订单" name="b">
                </van-tab>
                <van-tab title="待支付" name="c">
                </van-tab>
            </van-tabs>
        </div>

        <order-all v-show="activeName === 'a'" />
        <order-recent v-show="activeName === 'b'" />
        <order-pend v-show="activeName === 'c'" />


    </div>
</template>

<script setup>
import orderAll from './cpes/order-all.vue';
import orderRecent from './cpes/order-recent.vue';
import orderPend from './cpes/order-pend.vue';
import { ref } from 'vue';
const activeName = ref('a')



</script>

<style lang="less" scoped>
.order {
    background-color: #f7f8fb;

    .top-fixd {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
    }
}
</style>