<template>
    <div class="home-item" @click="clickLoading">
        <div class="item-inner">
            <div class="cover">
                <img :src="houseList.image.url" alt="">

            </div>
            <div class="info">
                <div class="position">
                    <img src="@/assets/img/home/location.png" alt="">
                    <div class="location">{{houseList.location}}</div>
                </div>
                <div class="name">{{houseList.houseName}}</div>
                <div class="summary">{{houseList.summaryText}}</div>
                <div class="price">
                    <div class="finalPrice">￥{{houseList.finalPrice}}</div>
                    <div class="cost-price">￥{{houseList.productPrice}}</div>
                    <!-- <div class="cheap-price">{{houseList?.priceTipBadge?.text}}</div> -->
                    <div class="cheap-price">{{houseList.priceTipBadge ? houseList.priceTipBadge.text: '未折扣' }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    houseList: {
        type: Object,
        default: () => ({})
    }
})

function clickLoading() {
    console.log(props.houseList.houseId)
}


</script>

<style lang="less" scoped>
.home-item {
    width: 50%;

    .item-inner {
        margin: 5px;
        background-color: #fff;
        height: 223px;
        border-radius: 5px;

        img {
            width: 100%;
            border-radius: 5px 5px 0 0;
        }

        .info {
            padding: 8px 10px 8px 10px;

            .position {
                display: flex;
                margin-bottom: 8px;

                img {
                    width: 12px;
                    height: 12px;
                }

                .location {
                    font-size: 12px;
                    color: #666;
                }
            }

            .name {

                display: -webkit-box;
                margin-bottom: 5px;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                font-size: 13px;
            }

            .summary {
                font-size: 12px;
                color: #666;
            }

            .price {
                display: flex;

                .finalPrice {
                    color: var(--primary-color);
                    font-size: 14px;
                }

                .cost-price {
                    margin-top: 2px;
                    color: #999;
                    font-size: 12px;
                    text-decoration: line-through;
                }

                .cheap-price {
                    margin-top: 1px;
                    margin-left: 5px;
                    background-image: linear-gradient(270deg, #f66, #ff9f9f);
                    color: #fff;
                    padding: 1px 6px 0 6px;
                    border-radius: 8px;
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }
}
</style>