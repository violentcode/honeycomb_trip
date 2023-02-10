<template>
    <div class="city-group-item">

        <van-index-bar :index-list="cityList" highlight-color="#ff9854">
            <!-- 热门区域 -->
            <van-index-anchor index="热门" />
            <div class="hotCityBox">
                <template v-for="(item, index) in hotCities">
                    <div class="hot-city-item" @click="checkCityActive(item)">
                        {{item.cityName}}
                    </div>
                </template>
            </div>
            <!-- 全部区域 -->
            <template v-for="(group, index) in itemCities" :key="index">
                <van-index-anchor :index="group.group" />
                <van-cell :title="city.cityName" v-for="(city, indey) in group.cities" @click="checkCityActive(city)"
                    :key="indey" />
            </template>
        </van-index-bar>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import useCityStore from '@/stores/modules/city';
import { useRouter } from "vue-router";

const cityStore = useCityStore()
const props = defineProps({
    itemCities: {
        type: Array,
        default: []
    },
    hotCities: {
        type: Array,
        default: []
    }
})
const cityList = computed(() => {
    const list = props.itemCities.map(item => item.group)
    list.unshift('#')
    return list
})
const router = useRouter()
// 监听热点城市的点击
function checkCityActive(cityInfo) {
    cityStore.checkCityInfo = cityInfo

    router.back()
}
</script>

<style lang="less" scoped>
.hotCityBox {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    padding-left: 10px;

    .hot-city-item {
        margin: 6px;
        width: 70px;
        height: 28px;
        background-color: #fff4ec;
        text-align: center;
        line-height: 28px;
        font-size: 12px;
        border-radius: 14px;

    }
}
</style>