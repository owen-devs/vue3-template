import NProgress from 'nprogress'
//虚拟加载进度条
export function nprogress(router){
	router.beforeEach((to, from, next)=>{
		if(to.path !== from.path){
			NProgress.start()
		}
		
		next()//进入下一个页面
	})

	router.afterEach(() => {
	  NProgress.done()
	})
}
