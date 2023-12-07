<template>
    <div class="w-100% inline-flex overflow-hidden" ref="wrapper" :key="props.key">
        <div ref="inner" class="w-auto ws-nowrap break-keep inline-flex items-center">
            <component :is="item" v-for="item in commonBtns" :key="item.key" />
            <el-dropdown v-if="isOvered">
                <span class="pl-10px">更多</span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item
                            v-for="(item, i) in moreBtns"
                            :key="i"
                            class="operation-dropdown-list-item"
                        >
                            <component :is="item" :key="item.key" />
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { VNode } from 'vue'

const props = defineProps({
    key: {
        required: true
    }
})

const wrapper = ref<HTMLElement | null>(null)
const inner = ref<HTMLElement | null>(null)
const slots: Readonly<any> = useSlots()
let slotsNode: VNode[] = slots?.default()
slotsNode = slotsNode.filter(
    (node) =>
        node &&
        node.type.toString() !== 'Symbol(Comment)' &&
        node.type.toString() !== 'Symbol()' &&
        node.type.toString() !== 'Symbol(v-cmt)'
)

const commonBtns = ref<VNode[]>([])
const moreBtns = ref<VNode[]>([])
const isOvered = ref<Boolean>(false)

const checkOvered = () => inner.value?.offsetWidth > wrapper.value?.offsetWidth

const { width: wrapperWidth } = useElementSize(wrapper, { width: 0, height: 0 })
const { width: innerWidth } = useElementSize(inner, { width: 0, height: 0 })

watchEffect(() => {
    if (wrapperWidth.value && innerWidth.value) {
        btnSplit()
    }
})

const btnSplit = async () => {
    commonBtns.value = []
    let moreLen = 0,
        i = 0,
        j = 0,
        len = slotsNode.length

    for (; i < len; i++) {
        if (!slotsNode[i]) {
            continue
        }
        commonBtns.value.push(slotsNode[i])
        await nextTick()

        if (checkOvered()) {
            commonBtns.value.splice(-1, 1)
            isOvered.value = true

            await nextTick()

            moreLen = len - i + i
            j = i

            if (checkOvered()) {
                commonBtns.value.splice(-1, 1)
                j = i - 1
            }

            break
        }
    }

    if (moreLen > 0) {
        moreBtns.value = []
        for (; j < len; j++) {
            if (!slotsNode[j]) {
                continue
            }
            moreBtns.value.push(slotsNode[j])
        }
        isOvered.value = true
    }
}

onMounted(() => {
    btnSplit()
})
</script>

<style lang="scss" scoped>
.operation-dropdown-list-item {
    padding: 0 16px;

    button,
    .el-button {
        width: 100%;
        padding: 9px 0;
        text-align: left;
        margin: 0;
        justify-content: flex-start;
    }
}
</style>
