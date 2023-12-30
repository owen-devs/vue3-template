import { request } from '@/utils/request'

export function getUserInfo(data) {
    return request({
        url: '/user/getUserInfo',
        method: 'post',
        data
    })
}

export function getUserListByPage(params, data) {
    return request({
        url: '/user/queryPage',
        method: 'post',
        params,
    	data
    })
}
