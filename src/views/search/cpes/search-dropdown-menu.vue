<template>
    <div class="dropdown-menu">
        <van-dropdown-menu active-color="#ff9854">
            <!-- 左侧位置 -->
            <van-dropdown-item title="位置" v-model="value1" :options="options1">
                <!-- 下拉加载的内容 -->
                <van-tree-select v-model:active-id="positionActiveId" v-model:main-active-index="positionActiveIndex"
                    :items="positionItems" height="500" />
            </van-dropdown-item>

            <!-- 中间欢迎度排序 -->
            <van-dropdown-item v-model="value2" :options="options2">
            </van-dropdown-item>

            <!-- 右侧筛选 -->
            <van-dropdown-item title="筛选" ref="item">
                开发中
            </van-dropdown-item>

        </van-dropdown-menu>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const props = defineProps({
    topList: {
        type: Array,
        default: []
    }
})

const [positionData, sortData, filterData] = props.topList

// 左侧位置数据处理
const positionActiveId = ref(0)
const positionActiveIndex = ref(0)
const positionItems = []
for (let i = 0; i < positionData?.subGroups.length; i++) {
    let objItem = { text: positionData.subGroups[i].itemTypeLabel, children: [] }
    for (let j = 0; j < positionData.subGroups[i].items.length; j++) {
        objItem.children.push({ text: positionData.subGroups[i].items[j].label, id: Number(String(i) + String(j)) })
    }
    positionItems.push(objItem)
}

// 中间数据处理
const value2 = ref(0)
const options2 = ref([])

for (let i = 0; i < sortData.items.length; i++) {
    options2.value.push({ text: sortData.items[i].label, value: i })
}







</script>

<style lang="less" scoped>
.dropdown-menu {
    :deep(.van-dropdown-menu__bar) {
        box-shadow: 0px 5px 12px rgba(100, 101, 102, .12);
        height: 44px;
    }
}
</style>