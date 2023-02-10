import myAxios from "../request/index"
// 获取热点建议
export function getHotRequest() {
    return myAxios.get({
        url: '/home/hotSuggests'
    })
}
export function getCategories() {
    return myAxios.get({
        url: '/home/categories'
    })
}
export function getHouseList(currentPage) {
    return myAxios.get({
        url: '/home/houselist',
        params: {
            page: currentPage
        }
    })
}