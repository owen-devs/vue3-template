<template>
    <div id="">
        {{ msg }}
    </div>
    <ul>
        <li v-for="item in list" :key="item.value">{{ item.label }}</li>
    </ul>

    <el-button type="primary" @click="click">测试按钮</el-button>
    <el-icon><i i-ph-airplane-tilt-fill /></el-icon>
    <div><span class="block w-2em h-2em color-#000 text-opacity-30 i-ph-airplane-tilt-fill"></span></div>
</template>

<script lang="ts" setup>
const msg = ref('用户管理页面')
const list = ref([
    {
        label: '张三',
        value: '1'
    },
    {
        label: '李四',
        value: '2'
    }
])

const click = () => {
    ElMessage.success('点击成功！')
}
</script>

<style lang="scss" scoped></style>
