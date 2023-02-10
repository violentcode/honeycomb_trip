import myAxios from "../request/index"
export function getHouseInfos(id) {
    return myAxios.get({
        url: '/detail/infos',
        params: {
            houseId: id
        }
    })
}