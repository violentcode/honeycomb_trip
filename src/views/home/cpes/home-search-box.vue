<template>
    <div class="home-search-box">
        <!-- 位置信息 -->
        <div class="location">
            <div class="city" @click="cityPush">{{cityStore.checkCityInfo.cityName}}</div>
            <div class="position">
                <span class="text" @click="clickPosition">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
        <!-- 日期范围处理 -->
        <div class="data-range" @click="onShowCalendar">
            <div class="start">
                <div class="date">
                    <span class="live">入住</span>
                    <span class="check-date">{{startDateStr}}</span>
                </div>
            </div>
            <div class="stay">
                共{{intervalTime}}晚
            </div>
            <div class="end">
                <div class="date">
                    <span class="live">离店</span>
                    <span class="check-date">{{endDateStr}}</span>
                </div>
            </div>
        </div>
        <!-- 日历 -->
        <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" color="#ff9854" />
        <!-- 价格不限-人数不限 -->
        <div class="price-count">
            <div class="price">
                价格不限
            </div>
            <div class="count">
                人数不限
            </div>
        </div>
        <!-- 关键字 -->
        <div class="key-position">
            关键字/位置/民宿名
        </div>
        <!-- 热点建议 -->
        <div class="hotSuggest">
            <template v-for="(item, index) in homeStore.hotSuggestData" :key="index">
                <div class="hotSuggest-item"
                    :style="{color: item.tagText.color, background: item.tagText.background.color}">
                    {{item.tagText.text}}
                </div>
            </template>
        </div>
        <!-- 搜索按钮 -->
        <div class="search-btn">
            <button class="search" @click="clickSearchBtn">开始搜索</button>
        </div>

    </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city"
import { useRouter } from 'vue-router';
import { formatMouthDay } from "@/utils/format_date"
import { ref } from "vue";
import useHomeStore from "@/stores/modules/home"
import useMainStore from "@/stores/modules/main";
import { computed } from "@vue/reactivity";
const router = useRouter()
// 点击进入城市页面
function cityPush() {
    router.push('/city')
}

// 点击获取定位
// function clickPosition() {
//     navigator.geolocation.getCurrentPosition(res => {
//         console.log(res)
//     }, err => {
//         console.log(err)
//     })
// }

// 当前城市
const cityStore = useCityStore()


// 日期范围处理
const mainStore = useMainStore()
// // 开始日期
const startDateStr = computed(() => {
    return formatMouthDay(mainStore.startDate)
})
// // 结束日期
const endDateStr = computed(() => {
    return formatMouthDay(mainStore.endDate)
})

// 日历
const showCalendar = ref(false)
// 点击显示日历
function onShowCalendar() {
    showCalendar.value = true
}
// 入住和离店相差时间
const intervalTime = computed(() => {
    return (Date.parse(new Date(mainStore.endDate)) - Date.parse(new Date(mainStore.startDate))) / (1000 * 3600 * 24)
})
// 点击确定关闭日历并且更新日期
function onConfirm(values) {
    showCalendar.value = false
    const formatStartDate = values[0]
    const formatEndDate = values[1]
    mainStore.startDate = formatStartDate
    mainStore.endDate = formatEndDate
}

// 热门建议
const homeStore = useHomeStore()
// 点击搜索
function clickSearchBtn() {
    router.push('/search')

}

</script>

<style lang="less" scoped>
.home-search-box {
    background-color: #f8f8ff;

    // 定位
    .location {
        display: flex;
        padding: 0 20px;
        align-items: center;
        height: 44px;

        .city {
            flex: 1;

        }

        .position {
            .text {
                position: relative;
                font-size: 12px;
                top: 1px;
                color: #666666;
            }

            img {
                width: 18px;
                margin-left: 10px;
            }
        }
    }

    // 日期范围
    .data-range {
        display: flex;
        justify-content: space-between;
        padding: 5px 20px;
        padding-right: 70px;

        .date {
            display: flex;
            flex-direction: column;

            .live {
                color: #999999;
                font-size: 12px;
                margin-bottom: 2px;
            }

            .check-date {
                font-size: 15px;
            }
        }

        .stay {
            margin-top: 10px;
            color: #666;
            font-size: 12px;
        }
    }

    //   价格与数量不限
    .price-count {
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
        margin-right: 52px;
        color: #A599B2;


    }

    // 关键字
    .key-position {
        padding: 15px 20px;
        color: #A599B2;
        margin-bottom: 10px;
    }

    // 热点建议
    .hotSuggest {
        display: flex;
        padding: 0 20px;
        padding-right: 40px;
        margin-bottom: 10px;
        flex-wrap: wrap;
        align-items: center;
        color: #999;

        .hotSuggest-item {
            font-size: 12px;
            padding: 4px 8px;
            border-radius: 14px;
            margin: 3px;
        }
    }

    // 搜索按钮
    .search-btn {
        display: flex;
        justify-content: center;

        .search {
            width: 342px;
            height: 38px;
            max-height: 50px;
            font-weight: 500;
            font-size: 18px;
            line-height: 38px;
            text-align: center;
            border-radius: 20px;
            background: var(--tjc-theme-linear-gradient);
            color: #fff;
        }
    }

}
</style>