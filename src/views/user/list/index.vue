<template>
    <div class="uset-list-container">
        <h3>用户管理列表</h3>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="userName" label="姓名" width="180" />
            <el-table-column prop="age" label="年龄" />
            <el-table-column prop="userGender" label="性别" />
            <el-table-column prop="email" label="邮箱" />
            <el-table-column prop="createTime" label="创建时间" />
        </el-table>
        <el-pagination
            class="mt-0.5em justify-end"
            v-model:current-page="pageNo"
            v-model:page-size="pageSize"
            :page-sizes="[10, 20, 30, 50, 100]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="sizeChange"
            @current-change="currentChange"
        />
    </div>
</template>
<script lang="ts" setup>
import { getUserListByPage } from '@/api/user'

const { pageNo, pageSize, total, currentChange, sizeChange } = usePagination()

const tableData = ref([])

const getUserList = () => {
    getUserListByPage(
        { pageNo: pageNo.value, pageSize: pageSize.value },
        { userGender: '男' }
    ).then((res) => {
        console.log(res)
        tableData.value = res?.list || []
        total.value = res.total || 0
    })
}

watch(
    () => [pageNo.value, pageSize.value],
    () => {
        console.log(pageNo.value)
        getUserList()
    }
)

onMounted(() => {
    getUserList()
})
</script>
<route lang="yaml">
meta:
    title: 用户管理列表
</route>
