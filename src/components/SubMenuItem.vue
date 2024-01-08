<template>
    <el-sub-menu
        v-if="props.item?.children?.length > 0"
        :index="props?.item?.path"
        :key="item?.path"
    >
        <template #title>
            <span>{{ props.item?.title }}</span>
        </template>
        <template v-for="child in props.item.children" :key="child.path">
            <SubMenuItem v-if="child?.children?.length > 0" :item="child" />
            <el-menu-item v-else :key="child.path" :index="child.path" @click="goRoute(child)">
                {{ child.title }}
            </el-menu-item>
        </template>
    </el-sub-menu>
    <el-menu-item
        v-else
        @click="goRoute(props.item)"
        :index="props.item.path"
        :key="props.item.title"
    >
        {{ item.title }}
    </el-menu-item>
</template>
<script lang="ts" setup>
const emits = defineEmits(['goRoute'])
const props = defineProps({
    item: {
        type: Object,
        default: () => ({}),
        required: true
    }
})
const router = useRouter()
const routes = router.getRoutes().filter((v) => v.name)
const goRoute = (item: any) => {
    console.log(item)
    const isExist = routes.find((v) => v.path === item.path)
    console.log(isExist)
    if (isExist) {
        router.push({ path: item.path })
    }
}
</script>
