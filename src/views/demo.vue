<template>
  <main>
    <h1 class="header-text keep-all">测试layout yaml页</h1>
    
    
    <el-switch
	    v-model="theme"
	    active-value="blue"
	    inactive-value="red"
	    class="ml-2"
	    active-text="blue"
	    inactive-text="red"
	    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
	  />
  </main>
</template>

<script lang="ts" setup>
import { download } from "@/utils/download"
const {pageSize, pageNo, total} = usePagination()

//	const theme = ref(true)
	localStorage.setItem('theme', "blue")
	let theme = useLocalStorage('theme')
	console.log(theme.value)
	watch(()=>theme.value, (val)=>{
		console.log(val)
	})
//	download("11212.txt")
console.log(pageSize, pageNo, total)
	
	
</script>

<style lang="scss" scoped>
	.header-text{
		color: var(--base-bg-color);
		@apply bg-red;
	}
</style>
<route lang="yaml">
	meta:
    layout: detail
</route>
