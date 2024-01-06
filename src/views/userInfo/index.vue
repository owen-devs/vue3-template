<template>
    <div class="">
        <el-descriptions title="个人信息">
            <el-descriptions-item label="用户名">{{ user.userName }}</el-descriptions-item>
            <el-descriptions-item label="账号">{{ user.userAccount }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{ user.userGender }}</el-descriptions-item>
            <el-descriptions-item label="年龄">{{ user.age }}</el-descriptions-item>
            <el-descriptions-item label="邮箱">{{ user.email }}</el-descriptions-item>
            <el-descriptions-item label="创建时间">{{ user.createTime }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>
<script lang="ts" setup>
import { getUserInfo } from '@/api/user'
const user = ref({
    userName: '某某'
})

const getDetail = () => {
    getUserInfo({ userId: '007eed21-eb10-8888-6fea-d78666345bd8' }).then((res) => {
        user.value = res
    })
}

onMounted(() => {
    getDetail()
})
</script>
