<template>
  <div class="app">
    <!-- 路由占位 -->
    <!-- 路由做Keep-alive -->
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component" />
      </keep-alive>
    </router-view>

    <!-- <router-view v-if="!route.meta.keeyAlive"></router-view> -->

    <!-- tab-bar -->
    <tab-bar v-show="!route.meta.hideTabBar"></tab-bar>

    <!-- Loading -->
    <Loading v-show="mainStore.isLoading" />
  </div>

</template>

<script setup>
import TabBar from "./components/tab-bar/tab-bar.vue"
import { useRoute } from "vue-router"
import Loading from "./components/Loading/Loading.vue";
import useMainStore from "./stores/modules/main";
const route = useRoute()
const mainStore = useMainStore()

</script>

<style scoped>

</style>