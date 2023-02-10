<template>
    <div class="select-time">
        <div class="start">
            <div class="text">住</div>
            <div class="start-time">{{startDateStr}}</div>
        </div>
        <div class="end">
            <div class="text">离</div>
            <div class="end-time">{{endDateStr}}</div>
        </div>
    </div>
</template>

<script setup>
import { formatMouthDay } from "@/utils/format_date"
import useMainStore from '@/stores/modules/main';
const mainStore = useMainStore()

const startDateStr = formatMouthDay(mainStore.startDate, 'MM.DD')
const endDateStr = formatMouthDay(mainStore.endDate, 'MM.DD')

</script>

<style lang="less" scoped>
.select-time {
    padding-right: 10px;
    font-size: 10px;

    .start {
        display: flex;
        margin-bottom: 3px;
    }

    .end {
        display: flex;
        margin-top: 3px;

        .end-time {
            &::after {
                margin-left: 5px;
                content: " ";
                display: inline-block;
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
                border-bottom: 4px solid #333;
                width: 0;
                height: 0;
                transform: rotate(-225deg);

            }
        }
    }

    .text {
        color: #999;
        margin-right: 3px;
    }
}
</style>