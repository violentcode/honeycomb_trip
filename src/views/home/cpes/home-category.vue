<template>
    <div class="category">
        <template v-for="(item, index) in homeStore.categories">
            <div class="item">
                <img :src="item.pictureUrl" alt="">
                <div class="text">{{item.title}}</div>
            </div>
        </template>
    </div>
</template>

<script setup>
import useHomeStore from "@/stores/modules/home"
const homeStore = useHomeStore()


</script>

<style lang="less" scoped>
.category {
    display: flex;
    flex-shrink: initial;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px 13px;
        width: 48px;
        height: 52px;

        img {
            width: 32px;
            height: 32px;
        }

        .text {
            width: 50px;
            font-size: 12px;
            text-align: center;
            color: #666;
        }
    }
}
</style>