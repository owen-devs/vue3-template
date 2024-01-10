<template>
    <div class="p-1em flex items-center">
        <el-button @click="changeCollapse" class="mr-0.5em" link>
            <el-icon class="!text-1.5em">
                <i
                    :class="{
                        'i-ri-indent-decrease': !isCollapse,
                        'i-ri-indent-increase': isCollapse
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
