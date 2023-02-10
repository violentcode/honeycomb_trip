import { defineStore } from "pinia";
import { getFavorDate, getHistoryDate } from "@/services/modules/favor"
const useFavorStore = defineStore('favor', {
    state: () => ({
        myFavorData: [],
        historyData: []
    }),
    actions: {
        getFavorDateActions() {
            getFavorDate().then(res => {
                this.myFavorData = res.data.data.items
            })
        },
        getHistoryDateActions() {
            getHistoryDate().then(res => {
                this.historyData = res.data.data.items
            })
        }
    }
})
export default useFavorStore