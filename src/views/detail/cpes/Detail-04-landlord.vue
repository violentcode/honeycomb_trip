<template>
    <div class="detail-landlord">
        <DetailSection title="房东介绍" more="查看房东主页">
            <div class="topScroll">
                <img :src="landlordModule.topScroll" alt="">
            </div>
            <div class="landlord-infos">
                <div class="left">
                    <img :src="landlordModule.hotelLogo" alt="">
                </div>
                <div class="info">
                    <div class="name">{{landlordModule.hotelName}}</div>
                    <div class="tags">
                        <template v-for="(item, index) in landlordModule.hotelTags" :key="index">
                            <span class="tag"> {{item.tagText.text}}</span>
                            <span class="divider" v-if="landlordModule.hotelTags.length-1 !== index">|</span>
                        </template>
                    </div>
                </div>
                <div class="right">
                    联系房东
                </div>
            </div>
            <div class="summary">
                <template v-for="(item, index) in landlordModule.hotelSummary">
                    <div class="summary-item">
                        <div class="title">{{item.title}}</div>
                        <div class="introduction">{{item.introduction}}</div>
                        <div class="tip">{{item.tip}}</div>
                    </div>
                </template>
            </div>
        </DetailSection>
    </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue';
defineProps({
    landlordModule: {
        type: Object,
        default: () => ({})
    }
})


</script>

<style lang="less" scoped>
.detail-landlord {
    .topScroll {
        margin-bottom: 10px;

        img {
            width: 100%;
        }
    }

    .landlord-infos {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 50px;

        .left {
            img {
                width: 54px;
                height: 54px;
            }

        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            // margin-right: 60px;

            .name {
                font-weight: 700;
                font-size: 16px;
                margin-bottom: 2px;
            }

            .tags {
                display: flex;
                font-size: 12px;
                color: #999;
                margin-top: 2px;


                .divider {
                    padding: 0 5px;
                }
            }

        }

        .right {
            // padding: 2px 5px;
            width: 72px;
            height: 24px;
            text-align: center;
            line-height: 24px;
            background-image: var(--tjc-theme-linear-gradient);
            color: #fff;
            border-radius: 5px;
            font-size: 12px;
        }
    }

    .summary {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;

        .summary-item {
            .title {
                font-size: 12px;
                color: #999;
            }

            .introduction {
                margin: 3px 0;
                font-weight: 700;
                font-size: 20px;
                color: #333;
            }

            .tip {
                font-size: 12px;
                color: #999;
            }
        }

    }
}
</style>