<template>
    <div class="search">
        <div class="tab-top">
            <searchNavBar />

            <searchDropdownMenu :topList="searchStore.searchTopList" />

            <searchTabWrapper :hotFilters="searchStore.searchResultList.hotFilters" />

            <!-- 下方列表 -->
            <favorSearchItem :myFavorData="searchStore.searchResultList.items" />
        </div>
    </div>
</template>

<script setup>
import searchNavBar from "./cpes/search-nav-bar.vue";
import searchDropdownMenu from "./cpes/search-dropdown-menu.vue";
import useSearchStore from "@/stores/modules/search"
import searchTabWrapper from "./cpes/search-tab-wrapper.vue";
import favorSearchItem from "@/components/favor-search-item/favor-search-item.vue";
const searchStore = useSearchStore()
// 请求顶部数据
searchStore.getSearchTopAction()

// 请求底下内容数据
searchStore.getSearchResultAction()
</script>

<style lang="less" scoped>
.search {
    background-color: #F7F8FB;

    .tab-top {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
    }
}
</style>