import { request } from '@/utils/request'

export function getProcessList(data: Object): Promise<any> {
    return request({
        url: '/getMenusForRoutes',
        method: 'post',
        data
    })
}
