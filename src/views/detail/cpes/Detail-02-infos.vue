<template>
    <div class="infos">
        <div class="name">
            {{topInfos.houseName}}
        </div>
        <div class="tags">
            <template v-for="(item, index) in topInfos.houseTags">
                <div class="tag" v-if="item.tagText"
                    :style="{color: item.tagText.color, backgroundColor: item.tagText.background.color}">
                    {{item.tagText.text}}
                </div>
            </template>
        </div>
        <div class="comment">
            <div class="left">
                <div class="score">{{topInfos.commentBrief.overall.toFixed(1)}}</div>
                <div class="scoreTitle">{{topInfos.commentBrief.scoreTitle}}</div>
                <div class="commentBrief">"{{topInfos.commentBrief.commentBrief}}"</div>
            </div>
            <div class="right">
                {{topInfos.commentBrief.totalCountStr}}条评论 &gt;
            </div>
        </div>
        <div class="position">
            <div class="left">{{topInfos.nearByPosition.address}}</div>
            <div class="right">地图·周边 &gt;</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    topInfos: {
        type: Object,
        default: () => ({})
    }

})


</script>

<style lang="less" scoped>
.infos {
    padding: 20px 20px;

    .name {
        font-size: 20px;
        font-weight: 700;
        color: #333;
        margin-bottom: 6px;
    }

    .tags {
        display: flex;
        font-size: 12px;
        margin-bottom: 10px;

        .tag {
            padding: 4px 2px 0px;
            margin-left: 3px;
        }

    }

    .comment {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 10px;
        background-color: #F5F7FA;
        border-radius: 6px;
        margin-bottom: 12px;

        .left {
            display: flex;
            align-items: center;

            .score {
                font-size: 20px;
                font-weight: 700;
                color: #333;

            }

            .scoreTitle {
                font-size: 12px;
                font-weight: 700;
                margin-left: 2px;
                margin-top: 5px;
            }

            .commentBrief {
                margin-top: 5px;
                margin-left: 2px;

                font-size: 12px;
                color: #666;
            }

        }

        .right {
            font-size: 12px;
            color: var(--primary-color);
        }
    }

    .position {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 10px;
        background-color: #F5F7FA;
        border-radius: 6px;

        .left {
            font-weight: 700;
            color: #333;
        }

        .right {
            font-size: 12px;
            color: var(--primary-color);
        }
    }
}
</style>