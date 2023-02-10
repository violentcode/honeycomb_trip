import myAxios from "../request/index"
// 获取全部城市数据
export function getCityAll() {
    return myAxios.get({
        url: "/city/all"
    })
}