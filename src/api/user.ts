import { request } from '@/utils/request'

export function getUserInfo(params) {
    return request({
        url: '/user/getDetail',
        method: 'get',
        params
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

export function createUser(data) {
    return request({
        url: '/user/createUser',
        method: 'post',
        data
    })
}

export function updateUser(data) {
    return request({
        url: '/user/updateUser',
        method: 'post',
        data
    })
}
export function deleteUser(params) {
    return request({
        url: '/user/deleteUser',
        method: 'get',
        params
    })
}
