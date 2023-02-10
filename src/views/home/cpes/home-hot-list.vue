<template>
    <div class="hot-list">
        <h2 class="hot-title">热门精选</h2>
        <div class="list">

            <template v-for="(item, index) in homeStore.houseList" :key="item.data.houseId">
                <template v-if="item.discoveryContentType === 3">
                    <HouseItemV3 :houseList="item.data" @click="clickHouseItem(item.data)" />
                </template>
                <template v-else-if="item.discoveryContentType === 9">
                    <HouseItemV9 :houseList="item.data" @click="clickHouseItem(item.data)" />
                </template>
            </template>
        </div>
    </div>
</template>

<script setup>
import HouseItemV3 from '@/components/house-item-v3/house-item-v3.vue';
import HouseItemV9 from '@/components/house-item-v9/house-item-v9.vue';
import useHomeStore from '@/stores/modules/home';
import { useRouter } from 'vue-router';
const homeStore = useHomeStore()
const router = useRouter()
// 发送跳转到详情页
function clickHouseItem(item) {
    router.push('/detail/' + item.houseId)
}

</script>

<style lang="less" scoped>
.hot-list {
    padding: 0 10px 10px 10px;

    .hot-title {
        margin-left: 10px;
        margin-bottom: 10px;
    }

    .list {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>