<template>
    <div class="">
        <el-drawer
            append-to-body
            :close-on-press-escape="false"
            :destroy-on-close="false"
            size="100%"
            class="bpmn-drawer"
            :show-close="false"
            v-model="showModel"
            @closed="$emit('closed')"
        >
            <template #header>
                <div class="flex items-center">
                    <el-page-header class="flex-1" @back="showModel = false">
                        <template #title>
                            <span class="text-large font-600 mr-3">新建流程</span>
                        </template>
                    </el-page-header>
                    <div class="">
                        <div class="fr title-right">
                            <el-button class="w-96px h-36px c-#666" @click="showModel = false">
                                <div>取消</div>
                            </el-button>
                            <el-button class="w-96px h-36px c-#666" @click="save">
                                <el-icon size="18">
                                    <i class="w-full h-full block i-ri-save-3-fill"></i>
                                </el-icon>
                                <div class="ml-5px">存草稿</div>
                            </el-button>
                            <el-button class="w-96px h-36px c-#666" type="primary" @click="depoly">
                                <el-icon size="18">
                                    <i class="w-full h-full block i-ri-send-plane-fill"></i>
                                </el-icon>
                                <div class="ml-5px">发 布</div>
                            </el-button>
                        </div>
                    </div>
                </div>
            </template>
        </el-drawer>
    </div>
</template>
<script lang="ts" setup>
// import bpmnProcess from '@/components/bpmnProcess'

const props = defineProps({
    row: {
        type: Object,
        default: () => ({})
    }
})

const showModel = ref(true)
</script>
