<template>
    <div class="search-nav-bar">
        <div class="nav-bar-inner">

            <van-icon name="arrow-left" size="20" @click="onClickLeft" class="arrow" />
            <div class="search-bar">
                <!-- 左边城市 -->
                <div class="address">{{cityStore.checkCityInfo.cityName}}</div>
                <!-- 中间时间 -->
                <div class="select-time">

                    <div class="start">
                        <div class="text">住</div>
                        <div class="start-time">{{startDateStr}}</div>
                    </div>
                    <div class="end">
                        <div class="text">离</div>
                        <div class="end-time">{{endDateStr}}</div>
                    </div>
                    <div class="trigonometry"></div>
                </div>
                <div class="key-word">
                    搜索博尔塔拉的景点
                </div>
            </div>

            <van-icon name="wap-nav" size="24" class="wap" />
        </div>


    </div>
</template>

<script setup>
import useCityStore from "@/stores/modules/city"
import { useRouter } from "vue-router";
import { formatMouthDay } from "@/utils/format_date"
import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore()

const startDateStr = formatMouthDay(mainStore.startDate, 'MM.DD')
const endDateStr = formatMouthDay(mainStore.endDate, 'MM.DD')
// 获取的城市
const cityStore = useCityStore()
// 点击返回箭头回到上一页
const router = useRouter()
function onClickLeft() {
    router.back()
}


</script>

<style lang="less" scoped>
.search-nav-bar {
    background-color: #fff;

    .nav-bar-inner {

        display: flex;
        padding: 6px 0;

        .arrow {
            padding: 8px 20px 5px 10px;
            color: var(--primary-color);
        }

        .search-bar {
            display: flex;
            width: 100%;
            height: 35px;
            background-color: #F2F4F6;
            color: #333;
            align-items: center;
            border-radius: 5px;

            .address {
                padding: 0 8px;
                font-size: 14px;


            }

            .select-time {
                position: relative;
                display: flex;
                padding: 0 8px 0 6px;
                flex-direction: column;
                justify-content: center;
                font-size: 12px;
                border: 1px solid #fff;

                .start {
                    display: flex;
                    margin-top: 5px;
                }

                .end {
                    display: flex;
                    margin-bottom: 5px;


                }

                .trigonometry {
                    position: absolute;
                    top: 25px;
                    right: -3px;
                    border-width: 4px;
                    border: 4px solid transparent;
                    border-bottom: 4px solid #333;
                    transform: rotate(135deg);

                }
            }

            .text {
                color: #999;
                margin-right: 3px;
            }

            .key-word {
                padding-left: 5px;
                font-size: 12px;
                color: #999;
            }
        }

        .wap {
            color: var(--primary-color);
            padding: 5px 12px;
        }
    }

}
</style>