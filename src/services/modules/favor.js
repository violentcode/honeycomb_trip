import myAxios from "../request/index"
export function getFavorDate() {
    return myAxios.get({
        url: '/favor/list'
    })
}
export function getHistoryDate() {
    return myAxios.get({
        url: '/favor/history'
    })
}