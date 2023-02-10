import { defineStore } from "pinia";
import { getCityAll } from "@/services"

const useCityStore = defineStore('city', {
    state: () => ({
        cityData: 0,
        checkCityInfo: {
            "cityId": 45,
            "cityName": "广州",
            "pinYin": "guangzhou",
            "gangAoTai": false,
            "hot": false,
            "longitude": "113.271",
            "latitude": "23.1354"
        },
    }),
    actions: {
        getCityAllActive() {
            getCityAll().then(res => {
                this.cityData = res.data
            })
        },

    },

})
export default useCityStore