import { defineStore } from "pinia";
import { getSearchTop, getSearchResult } from "@/services/modules/search"
const useSearchStore = defineStore('search', {
    state: () => ({
        searchTopList: [],
        searchResultList: []
    }),
    actions: {
        getSearchTopAction() {
            getSearchTop().then(res => {
                this.searchTopList = res.data.data.allConditions
            })
        },
        getSearchResultAction() {
            getSearchResult().then(res => {
                this.searchResultList = res.data.data
            })
        }
    }

})
export default useSearchStore