import { defineStore } from "pinia"
import { getHotRequest, getCategories, getHouseList } from "@/services"

const useHomeStore = defineStore('home', {
    state: () => ({
        hotSuggestData: [],
        categories: [],
        houseList: [],
        currentPage: 1,
    }),
    actions: {
        async getHotRequestActions() {
            const res = await getHotRequest()
            this.hotSuggestData = res.data
        },
        async getCategoriesActive() {
            const res = await getCategories()
            this.categories = res.data
        },
        async getHouseListActive() {
            const res = await getHouseList(this.currentPage++)
            console.log(111)
            this.houseList.push(...res.data)
        }
    }
})
export default useHomeStore
