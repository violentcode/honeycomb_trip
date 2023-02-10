<template>
    <div class="swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <template v-for="(item, index) in housePics">
                <van-swipe-item class="item">
                    <img :src="item.url" alt="">
                </van-swipe-item>

            </template>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-for="(value, key, index) in groupDate" :key="key">
                        <span
                            :class="{active: housePics[active]?.enumPictureCategory == key}">{{getName(value[0].title)}}
                            <span v-if="housePics[active]?.enumPictureCategory == key">
                                {{`${getCategoryIndex(housePics[active])}/${value.length}`}}</span>
                        </span>

                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>

const props = defineProps({
    housePics: {
        type: Array,
        default: []
    }
})
// 对数据进行转换
const groupDate = {}
for (let item of props.housePics) {
    groupDate[item.enumPictureCategory] = []
}
for (let item of props.housePics) {
    let valueArr = groupDate[item.enumPictureCategory]
    valueArr.push(item)
}
// 去除title中一些多余的符号
function getName(name) {
    return name.replace('：', ' ').replace('【', '').replace('】', '')
}
const getCategoryIndex = (item) => {
    const groupArr = groupDate[item.enumPictureCategory]
    return groupArr.findIndex(data => data === item) + 1
}
</script>

<style lang="less" scoped>
.swipe {
    .my-swipe {
        .item {
            img {
                width: 100%;
            }
        }

        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            background: rgba(0, 0, 0, 0.8);
            color: #fff;

            .active {
                color: #333;
                background-color: #fff;
                border-radius: 8px;
                padding: 0px 8px;
            }
        }
    }
}
</style>
