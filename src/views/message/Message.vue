<template>
    <div class="message">
        <!-- tab-bar -->
        <div class="tab-bar">
            <van-nav-bar left-arrow @click-left="onClickLeft" title="消息中心">
                <template #right>
                    <van-icon name="wap-nav" size="24" />
                </template>
            </van-nav-bar>
        </div>

        <!-- 主体内容 -->
        <!-- 没消息显示 -->
        <no-messages />
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import noMessages from "./cpes/no-messages.vue"
const router = useRouter()
function onClickLeft() {
    router.back()
}

</script>

<style lang="less" scoped>
.message {
    width: 100vw;
    height: 100vh;
    background-color: #F7F8FB;
}
</style>