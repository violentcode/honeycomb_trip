<template>
    <div class="detail">
        <!-- tab-control -->
        <TabControl :titles="sectionEls? Object.keys(sectionEls): {}" class="tab-contorl" v-if="isShowTabControl"
            ref='tabRef' @tabItemClick='tabItemClick' />
        <!-- NavBar导航栏 -->
        <van-nav-bar title='房屋详情' left-text='旅途' left-arrow @click-left=" onClickLeft" />

        <div class="main" v-if="mainPart" v-memo="[mainPart]">
            <!-- 轮播图 -->
            <DetailSwipe :housePics="mainPart.topModule.housePicture.housePics" />

            <!-- 详情页的主要信息 -->
            <DetailInfos :topInfos="mainPart.topModule" :ref="getRef" name="描述" />

            <!-- 房屋设施 -->
            <DetailFacility :houseFacilitys="mainPart.dynamicModule.facilityModule.houseFacility" :ref="getRef"
                name="设施" />

            <!-- 房东介绍 -->
            <DetailLandlord :landlordModule="mainPart.dynamicModule.landlordModule" :ref="getRef" name="房东" />

            <!-- 房客点评 -->
            <DetailComment :commentModule="mainPart.dynamicModule.commentModule" :ref="getRef" name="评论" />

            <!-- 预定须知 -->
            <DetailOrderRules :orderRules="mainPart.dynamicModule.rulesModule.orderRules" :ref="getRef" name="须知" />

            <!-- 位置周边 -->
            <DetailMap :position="mainPart.dynamicModule.positionModule" :ref="getRef" name="周边" />

            <!-- 价格说明 -->
            <DetailIntroduction :priceIntro="mainPart.introductionModule" />
        </div>

        <!-- 底部安全 -->
        <div class="footer">
            <img src="@/assets/img/detail/icon_ensure.png" alt="">
            <div class="text">弘源旅途, 永无止境!</div>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import TabControl from "@/components/tab-control/TabControl.vue"
import DetailSwipe from './cpes/Detail-01-swipe.vue';
import DetailInfos from "./cpes/Detail-02-infos.vue"
import DetailFacility from "./cpes/Detail-03-facility.vue"
import DetailLandlord from "./cpes/Detail-04-landlord.vue"
import DetailComment from './cpes/Detail-05-comment.vue';
import DetailOrderRules from './cpes/Detail-06-orderRules.vue';
import DetailMap from './cpes/Detail-07-map.vue';
import DetailIntroduction from './cpes/Detail-08-introduction.vue';
import { getHouseInfos } from "@/services/modules/detail"
import { ref, watch } from 'vue';
import { computed } from '@vue/reactivity';
import useScroll from "@/hooks/useScroll"

// 点击左侧箭头返回
const router = useRouter()
function onClickLeft() {
    router.back()
}


// 获取房屋详情页全部数据
const houseInfos = ref({})
const route = useRoute()

// 发送请求详情页获取数据
getHouseInfos(route.params.id).then(res => {
    houseInfos.value = res.data
})

// 监听详情数据中的其中一个属性
const mainPart = computed(() => {
    return houseInfos.value.mainPart
})

// 监听页面的滚动达到一定位置显示出来
const { scrollTop } = useScroll()
const isShowTabControl = computed(() => {
    return scrollTop.value > 300
})

// 获得dom元素对象例如： {描述：<div class="info"><div>}
const sectionEls = ref({})
const getRef = value => {
    if (!value) return
    sectionEls.value[value.$el.getAttribute('name')] = value.$el
}
// 防止点击tab乱跳
let isClick = false
let currentTop = -1
// 点击跳转到对应的位置
function tabItemClick(index) {
    isClick = true
    let domElTop = Object.values(sectionEls.value)[index].offsetTop
    if (index !== 0) {
        domElTop -= 44
    }
    currentTop = domElTop
    window.scrollTo({
        top: domElTop,
        behavior: "smooth"
    })



}
// 根据页面滚动到的位置去匹配对应的tab-control
const tabRef = ref()
watch(scrollTop, (newValue) => {
    if (currentTop === newValue) {
        isClick = false
    }
    if (isClick) return
    const els = Object.values(sectionEls.value).map(item => item.offsetTop)
    let index = els.length - 1
    for (let i = 0; i < els.length; i++) {
        if (newValue + 44 < els[i]) {
            index = i - 1
            break
        }
    }
    tabRef.value?.setcurrentIndex(index)
})











</script>

<style lang="less" scoped>
.tab-control {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
        width: 123px;
    }

    .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
    }
}
</style>