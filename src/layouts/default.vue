<template>
    <div class="">
        <el-row>
            <el-col :span="4">
                <side-bar />
            </el-col>
            <el-col :span="20">
                <nav-bar />
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

<style lang="scss" scoped></style>
