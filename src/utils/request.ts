import axios from 'axios'
import Cookies from 'js-cookie'

function createService(options: any) {
    const service = axios.create(options)

    service.interceptors.request.use(
        (config) => {
            // config.headers['Authorization'] = 'Bearer ' + Cookies.get('access_token')
            return config
        },
        (error) => {
            return Promise.reject(error)
        }
    )

    service.interceptors.response.use(
        (response) => {
            if (response?.config?.download) {
                return response
            }
            const res = response.data
            if (!res.success) {
                ElMessage.error(res.msg || '请求错误！')
                return Promise.reject(new Error(res.msg || '请求错误！'))
            }
            return res.result
        },
        (error) => {
            console.log(error.response.data.code)
            if (error.response.data.code === 401) {
                window.location.href = 'http://localhost:9999/auth-api/login'
                return Promise.reject(error)
            }
            ElMessage.error(error.response.data.msg || error.response.status)
            return Promise.reject(error)
        }
    )
    return service
}
console.log(import.meta.env)
const request = createService({
    baseURL: import.meta.env.VITE_BASE_API,
    timeout: 35000
})

const download = createService({
    baseURL: import.meta.env.VITE_BASE_API,
    responseType: 'arraybuffer',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    download: true,
    timeout: 0
})

export { request, download }
