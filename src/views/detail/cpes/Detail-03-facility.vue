<template>
    <div class="detail-facility">
        <DetailSection title="房屋设施" more="查看全部设施">
            <div class="facility-box">
                <template v-for="(group, index) in houseFacilitys.houseFacilitys">
                    <div class="facility-group" v-if="houseFacilitys.facilitySort.includes(index)" :key="index">
                        <!-- 每一组 -->
                        <div class="left">
                            <!-- 组别的icon -->
                            <div class="group-icon">
                                <img :src="group.icon" alt="">
                            </div>
                            <div class="icon-name">{{group.groupName}}</div>
                        </div>
                        <div class="item-box">
                            <template v-for="(item, indey) in group.facilitys.splice(0,4)" :key="indey">
                                <!-- 每个item -->
                                <div class="facility-item">
                                    <span class="item-icon">
                                        <img src="@/assets/img/detail/icon_check.png" alt="">
                                    </span>
                                    <div class="item-name">{{ item.name }}</div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
            </div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
defineProps({
    houseFacilitys: {
        type: Object,
        default: () => ({})
    }
})

</script>

<style lang="less" scoped>
.facility-box {
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;

    .facility-group {
        display: flex;
        margin: 25px 0;

        .left {
            width: 90px;
            text-align: center;

            .group-icon {
                margin-bottom: 5px;

                img {
                    width: 20px;
                    height: 20px;
                }
            }

            .icon-name {
                font-size: 12px;
            }
        }

        .item-box {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            align-items: center;

            .facility-item {
                display: flex;
                flex: 50%;
                margin-top: 5px;

                .item-icon {
                    img {
                        width: 12px;
                        height: 12px;
                    }
                }

                .item-name {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>