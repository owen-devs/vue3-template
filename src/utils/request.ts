import axios from 'axios'
import Cookies from 'js-cookie'

function createService(options){
    const service = axios.create(options)

    service.interceptors.request.use(
        config=>{
            config.headers['Authorization'] = 'Bearer ' + Cookies.get( 'access_token')
            return config
        }, error=>{
            return Promise.reject(error)
        }
    )

    service.interceptors.response.use(
        response=>{
        	if(response?.config?.download){
        		return response
        	}
            const res = response.data
            if (!res.success) {
                Message.error(res.msg || '请求错误！')
                return Promise.reject(new Error(res.msg || '请求错误！'))
            }
            return res.result
        },
        error=>{
            Message.error( error.response.msg || error.response.status)
            return Promise.reject(error)
        }
    )
    return service
}

const request = createService({
    baseURL:  process.env.VITE_BASE_API,
    timeout: 15000
})

const download = createService({
    baseURL:  process.env.VITE_BASE_API,
    responseType: 'arraybuffer',
    headers:{'content-type':'application/x-www-form-urlencoded'},
    download:true,
    timeout: 0
})

export {request, download}
