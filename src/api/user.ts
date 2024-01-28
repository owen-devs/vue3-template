import { request } from '@/utils/request'

export function getCurrentUser(params: Object) {
    return request({
        url: '/user/getCurrentUser',
        method: 'get',
        params
    })
}
export function getUserInfo(params: Object) {
    return request({
        url: '/user/getDetail',
        method: 'get',
        params
    })
}

export function getUserListByPage(params: Object, data: Object) {
    return request({
        url: '/user/queryPage',
        method: 'post',
        params,
        data
    })
}

export function createUser(data: Object) {
    return request({
        url: '/user/createUser',
        method: 'post',
        data
    })
}

export function updateUser(data: Object) {
    return request({
        url: '/user/updateUser',
        method: 'post',
        data
    })
}
export function deleteUser(params: Object) {
    return request({
        url: '/user/deleteUser',
        method: 'get',
        params
    })
}
