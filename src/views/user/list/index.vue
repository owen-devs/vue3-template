<template>
    <div class="uset-list-container">
        <div class="flex justify-between items-center">
            <h4>用户管理列表</h4>
            <div class="flex justify-end items-center">
                <el-button type="primary" @click="createUser">
                    新建用户
                    <el-icon class="ml-0.5em"><i class="i-ph-plus-circle-light" /></el-icon>
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
            <el-table-column prop="userName" label="姓名" width="100" />
            <el-table-column prop="age" label="年龄" width="100" />
            <el-table-column prop="userGender" label="性别" width="100" />
            <el-table-column prop="email" label="邮箱" min-width="150" />
            <el-table-column prop="createTime" label="创建时间" min-width="120" />
            <el-table-column prop="updateTime" label="最近更新时间" min-width="120" />
            <el-table-column label="操作" width="150">
                <template #default="{ row }">
                    <Operations :key="row.userId">
                        <el-button type="primary" size="small" @click="updateUser(row)">
                            编辑
                        </el-button>
                        <el-popconfirm
                            width="180"
                            confirm-button-text="确定"
                            cancel-button-text="取消"
                            title="确定要删除用户吗？"
                            @confirm="deleteUser(row)"
                        >
                            <template #reference>
                                <el-button size="small">删除</el-button>
                            </template>
                        </el-popconfirm>
                    </Operations>
                </template>
            </el-table-column>
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

const createUser = () => {}
const updateUser = (row) => {}
const deleteUser = (row) => {}

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
