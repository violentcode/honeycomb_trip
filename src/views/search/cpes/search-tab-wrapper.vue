<template>
    <div class="tab-wrapper">
        <div class="tab-wrapper-inner">
            <template v-for="(item, index) in hotFilters">
                <span :class="{'tab-item':true, active: index === currentIndex}"
                    @click="handleTabClick(index)">{{item.label}}</span>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
    hotFilters: {
        type: Array,
        default: []
    }
})
const currentIndex = ref(0)
function handleTabClick(index) {
    currentIndex.value = index
}


</script>

<style lang="less" scoped>
.tab-wrapper {
    .tab-wrapper-inner {
        padding: 15px 0 5px 20px;
        overflow-x: scroll;
        white-space: nowrap;
        height: 29px;

        .tab-item {
            margin-right: 10px;
            background-color: #fff;
            padding: 6px 10px;
            font-size: 12px;
            border-radius: 15px;
            color: #666;

            &.active {
                color: #ff9854;
            }
        }
    }

}
</style>