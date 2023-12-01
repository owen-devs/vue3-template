import { request } from '@/utils/request'

export function getMenus(data) {
    return request({
        url: '/getMenusForRoutes',
        method: 'post',
        data
    })
}
