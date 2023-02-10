import { defineStore } from "pinia";
import { getOrderAll, getOrderPend, getOrderRecent } from "@/services/modules/order"
const useOrderStore = defineStore('order', {
    state: () => ({
        orderAllDate: [],
        orderRecentDate: [],
        orderPendDate: []
    }),
    actions: {
        getOrderAllAction() {
            getOrderAll().then(res => {
                this.orderAllDate = res.data.data.orders
            })
        },
        getOrderRecentAction() {
            getOrderRecent().then(res => {
                this.orderRecentDate = res.data.data.orders
            })
        },
        getOrderPendAction() {
            getOrderPend().then(res => {
                this.orderPendDate = res.data.data.orders
            })
        }
    }

})
export default useOrderStore