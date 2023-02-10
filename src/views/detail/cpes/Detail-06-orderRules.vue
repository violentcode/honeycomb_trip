<template>
    <div class="order-rules">
        <DetailSection title="预定须知">
            <template v-for="(item, index) in orderRules" :key="index">
                <div class="rule-item">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="introduction">
                        {{item.introduction}}

                    </div>
                    <div class="explain" v-if="item.title === '在线押金'">
                        查看说明
                    </div>

                </div>


            </template>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
defineProps({
    orderRules: {
        type: Object,
        defaule: () => ({})
    }
})


</script>

<style lang="less" scoped>
.order-rules {
    .rule-item {
        display: flex;
        // justify-content: space-between;
        font-size: 12px;
        color: #666;
        margin: 15px 0;

        .title {
            width: 60px;
        }

        .introduction {
            position: relative;
            display: flex;
            color: #333;
            justify-content: space-between;


        }

        .explain {
            position: absolute;
            right: 13px;
            font-size: 12px;
            font-weight: 700;
        }


    }
}
</style>