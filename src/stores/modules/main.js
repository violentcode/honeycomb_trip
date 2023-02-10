import { defineStore } from "pinia"
const nowDate = new Date()
const endDate = new Date()
endDate.setDate(nowDate.getDate() + 1)
const useMainStore = defineStore("main", {
    state: () => ({
        startDate: new Date(),
        endDate: endDate,
        isLoading: false
    })
})

export default useMainStore