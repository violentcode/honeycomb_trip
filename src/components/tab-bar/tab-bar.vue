<template>
    <div class="tab-bar-box">
        <div class="tab-bar">
            <template v-for="(item, index) in tabbarData">
                <div :class="{'tab-bar-item': true, active: currentIndex === index}" @click="changeActive(index)">
                    <img :src="currentIndex === index ? getAssetURL(item.imageActive) : getAssetURL(item.image) "
                        alt="">
                    <span class="text">{{item.text}}</span>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import tabbarData from "@/assets/data/tabbarData"
import { getAssetURL } from "@/utils/load_assets"
import { useRoute, useRouter } from "vue-router"
import { ref, watch } from "vue";
// 记录active的变量
const currentIndex = ref(0)
const router = useRouter()
// 被点击时改变currentIndex
function changeActive(index) {
    currentIndex.value = index
    router.push(tabbarData[index].path)
}
// 监听路由的改变，获得对应的索引，根据获得的索引来更改currentIndex
const route = useRoute()
watch(route, (newValue) => {
    const index = tabbarData.findIndex(item => item.path === newValue.path)
    if (index !== -1) currentIndex.value = index

})

</script>

<style lang="less" scoped>
.tab-bar-box {
    height: 44px;

    .tab-bar {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        border-top: 1px solid #f5f5f5;
        background-color: #fff;
        z-index: 9;

        .tab-bar-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #646566;

            img {
                width: 36px;
                margin-bottom: 2px;
            }

            &.active {
                color: var(--primary-color);
            }

            .text {
                font-size: 12px;

            }
        }
    }
}
</style>