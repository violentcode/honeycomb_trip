<template>
    <div class="fovor-nav-bar">
        <van-nav-bar left-text="旅途" left-arrow @click-left="onClickLeft">
            <template #right>
                <van-icon name="wap-nav" size="24" />
            </template>
            <template #title>
                <van-tabs v-model:active="active" type="card" color="#ff9854" @click-tab="onClickTab">
                    <van-tab title="我的收藏"></van-tab>
                    <van-tab title="浏览历史"></van-tab>
                </van-tabs>
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const emit = defineEmits(['changeTabBar'])
const active = ref(0)
function onClickTab() {
    emit('changeTabBar', active.value)
}
const router = useRouter()
function onClickLeft() {
    router.back()
}

</script>

<style lang="less" scoped>

</style>