<template>
    <el-container class="w-100vw h-100vh">
        <el-aside
            :width="asideWidth"
            class="h-100% pl-1em overflow-auto side-bar transition-all ease-in-out duration-300"
        >
            <side-bar />
        </el-aside>
        <el-container>
            <el-header>
                <nav-bar />
            </el-header>
            <el-main class="!overflow-hidden !pt-0">
                <app-main />
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import navBar from './components/navBar'
import sideBar from './components/sideBar'
import appMain from './components/appMain'

//TODO
const collapseStore = useCollapseStore()

const asideWidth = computed(() => (collapseStore.isCollapse ? '81px' : '300px'))
</script>

<style lang="scss" scoped>
.side-bar {
    border-right: solid 1px var(--el-menu-border-color);
}
</style>
