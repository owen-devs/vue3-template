<template>
    <div class="uset-list-container">
        <div class="flex justify-between items-center">
            <h3>用户管理列表</h3>
            <div class="flex justify-end items-center">
                <el-button>
                    新建用户
                    <el-icon class="ml-0.5em"><i class="i-ph-plus-circle" /></el-icon>
                </el-button>
            </div>
        </div>
        <div class="pt-0.5em flex justify-between items-center">
            <div></div>
            <div>
                <el-input
                    v-model="searchs.userName"
                    @change="getUserList(true)"
                    placeholder="请输入搜索关键字"
                >
                    <template #append>
                        <el-button type="primary" @click="getUserList(true)">
                            <el-icon><i class="i-ph-magnifying-glass" /></el-icon>
                        </el-button>
                    </template>
                </el-input>
            </div>
        </div>

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

const searchs = ref({
    userName: ''
})

const getUserList = (refresh?: boolean) => {
    if (refresh) {
        pageNo.value = 1
    }
    getUserListByPage({ pageNo: pageNo.value, pageSize: pageSize.value }, searchs.value).then(
        (res) => {
            console.log(res)
            tableData.value = res?.list || []
            total.value = res.total || 0
        }
    )
}

watch(
    () => [pageNo.value, pageSize.value],
    () => {
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
