import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/'
    },
    {
      path: '/login',
      component: () => import('../views/login/login.vue')
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/404/404.vue')
    }
  ],
});

// 动态路由，用于匹配菜单动态添加路由
const asyncRoutes = [{}]

export function addRoutes(menus){
  // 是否有新的路由
  let hasNewRoutes = false
  const findAndAddRoutesByMenus = (arr) =>{
      arr.forEach(e=>{
          let item = asyncRoutes.find(o=>o.path == e.frontpath)
          if(item && !router.hasRoute(item.path)){
              router.addRoute("admin",item)
              hasNewRoutes = true
          }
          if(e.child && e.child.length > 0){
              findAndAddRoutesByMenus(e.child)
          }
      })
  }

  findAndAddRoutesByMenus(menus)

  return hasNewRoutes
}

export default router;


