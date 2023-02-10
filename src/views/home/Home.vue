<template>
    <div class="home" ref="homeRef">
        <!-- 顶部组件 -->
        <HomeNavBar />
        <!-- 主体图片 -->
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>

        <!-- 搜索组件 -->
        <HomeSearchBox />

        <!-- search-bar -->
        <HomeSearchBar v-show="isSearchShow" />

        <!-- 推荐分类 -->
        <HomeCategory />
        <!-- 热门精选列表 -->
        <HomeHotList />

    </div>
</template>
<script>
export default {
    name: 'home'
}
</script>
<script setup>
import HomeNavBar from './cpes/home-nav-bar.vue';
import HomeSearchBox from './cpes/home-search-box.vue';
import useHomeStore from "@/stores/modules/home"
import HomeCategory from './cpes/home-category.vue';
import HomeHotList from './cpes/home-hot-list.vue';
import useScroll from "@/hooks/useScroll"
import HomeSearchBar from './cpes/home-search-bar.vue';
import { watch, computed, ref, onDeactivated, onActivated, onMounted } from 'vue';

const homeStore = useHomeStore()
// 获取热点建议数据
homeStore.getHotRequestActions()
// 获取推荐类别数据
homeStore.getCategoriesActive()
// 获取房屋列表数据
homeStore.getHouseListActive()
// 获取封装的监听滚动的相关数据
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
    if (newValue) {
        homeStore.getHouseListActive().then(res => {
            isReachBottom.value = false
        })
    }
})
// 底部固定定位达到一定位置会显示
const isSearchShow = computed(() => {
    return scrollTop.value >= 360
}
)


// 跳回home时，保留原来的位置
onActivated(() => {
    homeRef.value?.scrollTo({
        top: scrollTop.value
    })
})







</script>

<style lang="less" scoped>
.home {
    height: 100vh;
    overflow-y: auto;
    background-color: #F5F7F9;

    .banner {
        img {
            width: 100%;
        }
    }


}
</style>