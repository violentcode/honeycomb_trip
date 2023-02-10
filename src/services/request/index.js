import useMainStore from "@/stores/modules/main"
import axios from "axios"
import { BASE_URL, TIME_OUT } from "./config"
const mainStore = useMainStore()
class MYAxios {
    constructor(baseURL, timeout = 10000) {

        this.instance = axios.create({
            baseURL,
            timeout

        })
        // 拦截器
        // 拦截请求
        this.instance.interceptors.request.use(config => {
            // 发出请求就打开loading
            mainStore.isLoading = true
            return config
        }, err => {
            return err
        })
        // 拦截响应
        this.instance.interceptors.response.use(res => {
            // 收到请求就关闭Loading
            mainStore.isLoading = false
            return res
        }, err => {
            mainStore.isLoading = false
            return err
        })
    }

    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }

}

export default new MYAxios(BASE_URL, TIME_OUT)