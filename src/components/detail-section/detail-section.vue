<template>
    <div class="detail-section">
        <div class="title">
            {{title}}
        </div>
        <div class="content">
            <slot>
                内容
            </slot>
        </div>
        <div class="more" v-if="more.length">
            {{more}} &gt;
        </div>

    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: '房屋设施'
    },
    more: {
        type: String,
        default: ''
    }
})


</script>

<style lang="less" scoped>
.detail-section {
    padding: 0 15px;
    border-top: 12px solid #F2F2F2;

    .title {
        padding: 15px 0;
        font-size: 20px;
        font-weight: 700;
        color: #333;
        border-bottom: 1px solid #F2F2F2;
    }

    .content {
        padding-top: 6px;
    }

    .more {
        text-align: right;
        padding: 20px 0 15px;
        font-weight: 700;
        color: var(--primary-color);
    }

}
</style>