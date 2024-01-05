<template>
    <div class="pt-1em">
        <h2>logo</h2>
        <div class="">
            <ul class="m-0 p-0">
                <li class="style-none" v-for="item in menus"></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
const router = useRouter()
console.log(router.options.routes)
console.log(
    router.options.routes.filter(
        (v) =>
            !v.path.includes('/components') && !v.path.includes('/:all') && !v.path.includes('/404')
    )
)

const menus = ref([{}])
</script>

<style lang="scss" scoped></style>
