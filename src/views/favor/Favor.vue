<template>
    <div class="favor">
        <!-- Nab-bar -->
        <FavorNavbar @changeTabBar="changeTabBar" />

        <!-- 收藏页主体 -->
        <!-- 我的收藏 -->
        <FavorMyFavor v-if="!currentIndex" />
        <!-- 浏览历史 -->
        <FavorBrowseHistory v-else />


    </div>
</template>

<script setup>
import FavorNavbar from "./cpes/favor-nav-bar.vue";
import FavorMyFavor from "./cpes/favor-my-favor.vue";
// import 
import FavorBrowseHistory from "./cpes/favor-browse-history.vue";
import { ref } from "vue";
import useFavorStore from "@/stores/modules/favor";
const currentIndex = ref(0)
const changeTabBar = index => {
    currentIndex.value = index
}
// 发送请求获得数据
const favorStore = useFavorStore()
favorStore.getFavorDateActions()
favorStore.getHistoryDateActions()

</script>

<style lang="less" scoped>

</style>