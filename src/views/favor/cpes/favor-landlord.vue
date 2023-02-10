<template>
    <div class="favor-landlord">
        <div class="no-data">
            <div class="pic">
                <img src="@/assets/img/favor/empty_favorite.44731802.png" alt="">
            </div>
            <div class="name">暂无收藏</div>
            <div class="desp">点击<span class="lovePic"><img src="@/assets/img/favor/favor.png" alt=""></span>即可收藏对应的房东
            </div>
            <button>随便去逛逛</button>
        </div>
    </div>
</template>

<script setup>



</script>

<style lang="less" scoped>
.favor-landlord {
    height: 100vh;
    padding: 10px 20px 55px 20px;
    background-color: #F7F8FB;

    .no-data {
        display: flex;
        flex-direction: column;
        align-items: center;

        .pic {
            img {
                width: 100%;

            }
        }

        .name {
            margin-top: 10px;
            font-size: 18px;
        }

        .desp {
            margin-top: 12px;
            margin-bottom: 30px;

            .lovePic {
                padding: 0 4px;

                img {
                    width: 12px;
                    height: 12px;
                    vertical-align: baseline;
                }
            }

        }

        button {
            padding: 0 38px;
            height: 40px;
            line-height: 40px !important;
            font-size: 16px;
            color: #fff;
            background: var(--primary-color);
            border-radius: 20px;
            border: none;
            outline: none;
        }
    }
}
</style>