<template>
    <div class="browse-history">
        <favor-item :myFavorData="favorStore.historyData" />
    </div>
</template>

<script setup>
import favorItem from '@/components/favor-search-item/favor-search-item.vue';
import useFavorStore from '@/stores/modules/favor';
const favorStore = useFavorStore()

</script>

<style lang="less" scoped>

</style>