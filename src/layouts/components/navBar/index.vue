<template>
    <div class="p-1em flex items-center">
        <el-button @click="changeCollapse" class="mr-0.5em" link>
            <el-icon class="!text-1.2em">
                <i
                    :class="{
                        'i-ph-arrow-fat-lines-left-light': !isCollapse,
                        'i-ph-arrow-fat-lines-right-light': isCollapse
                    }"
                />
            </el-icon>
        </el-button>
        <Breadcrumb />
    </div>
</template>

<script lang="ts" setup>
const collapse = useCollapseStore()

const isCollapse = ref(false)
const changeCollapse = () => {
    isCollapse.value = !isCollapse.value
    collapse.setCollapse(isCollapse.value)
}
</script>

<style lang="scss" scoped></style>
