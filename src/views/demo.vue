<template>
    <main>
        <h1 class="header-text keep-all">测试layout yaml页</h1>

        <el-switch v-model="theme" active-value="blue" inactive-value="red" class="ml-2" active-text="blue" inactive-text="red" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />

        <el-dialog class="" v-model="dialogVisible" title="Tips" width="30%" draggable>
            <span>It's a draggable Dialog</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="dialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
                </span>
            </template>
        </el-dialog>
        <el-button @click="dialogVisible = true">打开对话框</el-button>

        <el-drawer v-model="drawer" title="I am the title" direction="rtl">
            <span>Hi, there!</span>
        </el-drawer>
        <el-button @click="drawer = true">打开抽屉</el-button>

        <div class="w-140px px-5px inline-block bg-green py-0px flex items-center justify-center">
            <Operations :key="123">
                <el-button link @click.stop="showBtn('11212.txt')">下载</el-button>
                <el-button link @click.stop="showBtn('11212.txt')">删除</el-button>
                <el-button link @click.stop="showBtn('11212.txt')">详情</el-button>
                <el-button link @click.stop="showBtn('11212.txt')">编辑情报</el-button>
            </Operations>
        </div>
    </main>
</template>

<script lang="ts" setup>
import type OperationsVue from '@/components/Operations.vue'
import { download } from '@/utils/download'
const { pageSize, pageNo, total } = usePagination()

//	const theme = ref(true)
localStorage.setItem('theme', 'blue')
let theme = useLocalStorage('theme', 'default')
console.log(theme.value)
watch(
    () => theme.value,
    (val) => {
        console.log(val)
    }
)
//	download("11212.txt")
console.log(pageSize, pageNo, total)

const dialogVisible = ref(false)
const drawer = ref(false)

const showBtn = (text: string) => {
    ElMessage.success(text)
}
</script>

<style lang="scss" scoped>
.header-text {
    color: var(--base-bg-color);
    @apply bg-red;
}
</style>
<route lang="yaml">
meta:
    layout: detail
</route>
