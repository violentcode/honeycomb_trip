<template>
    <div class="my-favor">
        <van-tabs v-model:active="activeName" color="#ff9854">
            <van-tab title="房屋" name="a">
                <!-- 房屋部分 -->
                <favor-item :myFavorData="favorStore.myFavorData" />
            </van-tab>
            <van-tab title="房东" name="b">
                <!-- 房东部分 -->
                <favor-landlord />
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
// import favorHouse from "./favor-house.vue"
import favorItem from "@/components/favor-search-item/favor-search-item.vue";
import favorLandlord from "./favor-landlord.vue"
import useFavorStore from "@/stores/modules/favor";
const favorStore = useFavorStore()




</script>

<style lang="less" scoped>

</style>