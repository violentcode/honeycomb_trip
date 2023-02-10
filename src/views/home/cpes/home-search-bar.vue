<template>
    <div class="home-search-bar">
        <div class="search-inner">
            <selectTime></selectTime>

            <div class="key-position" @click="jumpSearch">关键字/位置/民宿</div>

            <div class="right" @click="jumpSearch"></div>
        </div>
        <div class="Y-axis">

        </div>
    </div>
</template>

<script setup>
import selectTime from '@/components/select-time/select-time.vue';
import { useRouter } from 'vue-router';
const router = useRouter()

function jumpSearch() {
    router.push('/search')
}



</script>

<style lang="less" scoped>
.home-search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px 16px 10px 16px;
    height: 45px;
    background-color: white;
    z-index: 9;

    .search-inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        background-color: #F2F4F6;
        border-radius: 5px;



        .key-position {
            color: #666;
        }

        .right {
            width: 24px;
            height: 24px;
            display: inline-block;
            background-image: url(/src/assets/img/home/home-sprite.png);
            background-position: -29px -151px;
            background-size: 207px 192px;
        }


    }

    .Y-axis {
        position: absolute;
        top: 0;
        left: 85px;
        width: 1px;
        height: 100%;
        background-color: #fff;
    }


}
</style>