import { request } from '@/utils/request'

export function getMenus(data: Object) {
    return request({
        url: '/getMenusForRoutes',
        method: 'post',
        data
    })
}
