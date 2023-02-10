<template>
    <div class="city">
        <div class="top">
            <!-- 1.搜索 -->
            <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel='cancelClick' />
            <!-- 2.tab切换 -->
            <van-tabs v-model:active="tabActive" color="#ff9854">
                <template v-for="(value, key, index) in cityData">
                    <van-tab :title="value.title" :name="key"></van-tab>
                </template>

            </van-tabs>
            <div class="context">
                <template v-for="(value, key, index) in cityData">
                    <CityGroupItem v-show="tabActive === key" :itemCities="value.cities" :hotCities="value.hotCities">
                    </CityGroupItem>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import useCityStore from "@/stores/modules/city"
import { computed } from '@vue/reactivity';
import { storeToRefs } from 'pinia';
import CityGroupItem from './cpns/city-group-item.vue';

const router = useRouter()
const searchValue = ref('')
const tabActive = ref()
function cancelClick() {
    router.back()
}
const cityStore = useCityStore()
// 获取全部城市信息请求
cityStore.getCityAllActive()
const { cityData } = storeToRefs(cityStore)
const currentGroup = computed(() => cityData.value[tabActive.value])

</script>



<style lang="less" scoped>
.city {
    .top {
        position: relative;
        z-index: 9;
    }

    .context {
        height: calc(100vh - 98px);
        overflow-y: auto
    }

}
</style>