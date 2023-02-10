<template>
    <div class="home-item">
        <div class="item-inner">
            <div class="cover">
                <!-- 房屋图片 -->
                <img :src="houseList.image.url" alt="">
            </div>
            <!-- 房屋信息 -->
            <div class="info">
                <div class="sumarry">
                    {{houseList.summaryText}}
                </div>
                <div class="name">
                    {{houseList.houseName}}
                </div>
                <div class="price-rate">
                    <van-rate size="10px" color="#fff" :model-value="Number(houseList.commentScore)" readonly
                        allow-half />
                    <div class="new-price">
                        ￥{{houseList.finalPrice}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    houseList: {
        type: Object,
        default: () => ({})
    }
})


</script>

<style lang="less" scoped>
.home-item {
    width: 50%;


    .item-inner {
        position: relative;
        margin: 5px;

        img {
            width: 100%;
            border-radius: 5px;
        }

        .info {
            position: absolute;
            padding: 0 10px 8px 10px;
            left: 0;
            right: 0;
            bottom: 0;
            color: #fff;


            .sumarry {
                margin-bottom: 5px;
                font-size: 12px;
            }

            .name {
                display: -webkit-box;
                margin-bottom: 10px;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }

            .price-rate {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>