import myAxios from "../request/index"
export function getOrderAll() {
    return myAxios.get({
        url: '/order/list?type=all'
    })
}
export function getOrderRecent() {
    return myAxios.get({
        url: '/order/list?type=recent'
    })
}
export function getOrderPend() {
    return myAxios.get({
        url: '/order/list?type=pend'
    })
}