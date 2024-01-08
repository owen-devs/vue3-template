<template>
    <div class="">
        <el-menu :default-active="active" :collapse="isCollapse">
            <SubMenuItem :item="item" v-for="item in menus" :key="item?.path" />
        </el-menu>
    </div>
</template>
<script lang="ts" setup>
const router = useRouter()
const active = computed(() => router.currentRoute.value.path)
const isCollapse = ref(false)

const menus = ref([
    {
        path: '/userList',
        title: '用户管理'
    },
    {
        path: '/userInfo',
        title: '用户个人信息'
    },
    {
        path: '/detail',
        title: '用户个人详情'
    },
    {
        title: '无限菜单',
        path: '',
        children: [
            {
                path: '/demo',
                title: '二级示例页-有下级',
                children: [
                    {
                        path: '/demo/child',
                        title: '三级菜单有下级',
                        children: [
                            {
                                path: '/demo/child/sub',
                                title: '四级菜单'
                            }
                        ]
                    },
                    {
                        path: '/demo/child2',
                        title: '三级菜单没下级'
                    }
                ]
            },
            {
                path: '/demo2',
                title: '二级示例页2-没下级'
            }
        ]
    }
])
</script>

<style lang="scss" scoped></style>
