<template>
    <div class="uset-list-container">
        <div>用户管理列表</div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="userName" label="姓名" width="180" />
            <el-table-column prop="age" label="年龄" />
            <el-table-column prop="userGender" label="性别" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="createTime" label="创建时间" />
        </el-table>
    </div>
</template>
<script lang="ts" setup>
import { getUserListByPage } from '@/api/user'

const tableData = ref([])
const pagination = ref({
    pageNo: 1,
    pageSize: 10
})

const getUserList = () => {
    getUserListByPage(pagination.value, {}).then((res) => {
        console.log(res)
        tableData.value = res?.list || []
    })
}

onMounted(() => {
    getUserList()
})
</script>
