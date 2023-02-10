<template>
    <div class="NoMessage">
        <div class="pic">
            <img src="@/assets/img/message/icon_message.png" alt="">
        </div>
        <div class="content">
            暂无聊天消息
        </div>
    </div>
</template>

<script setup>



</script>

<style lang="less" scoped>
.NoMessage {


    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .pic {
        text-align: center;

        img {
            width: 88%;
        }
    }
}
</style>