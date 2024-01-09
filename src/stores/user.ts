import { getUserInfo } from '@/api/user'
export const useUserInfoStore = defineStore('UserInfo', {
    state: () => ({
        userInfo: {}
    }),
    actions: {
        getUserInfo() {
            getUserInfo().then((res) => {
                this.userInfo = res.data
            })
        }
    }
})
