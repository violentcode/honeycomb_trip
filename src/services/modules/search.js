import myAxios from "../request/index"
export function getSearchTop() {
    return myAxios.get({
        url: '/search/top'
    })
}
export function getSearchResult() {
    return myAxios.get({
        url: '/search/result'
    })
}