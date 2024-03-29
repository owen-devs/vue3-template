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
//@ts-ignore
import logo from './components/logo'
//@ts-ignore
import sideBar from './components/sideBar'
//@ts-ignore
import navBar from './components/navBar'
//@ts-ignore
import appMain from './components/appMain'
</script>

<style lang="scss" scoped></style>
