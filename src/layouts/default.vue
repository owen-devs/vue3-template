<template>
    <div class="layout-container">
        <el-row>
            <el-col :span="24">
                <nav-bar />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="6">
                <side-bar />
            </el-col>
            <el-col :span="18">
                <app-main />
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import navBar from './components/navBar'
import sideBar from './components/sideBar'
import appMain from './components/appMain'
</script>

<style lang="scss" scoped>
@import './styles/layout';
</style>
