import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import {UserStore} from "../store/user";


let files = import.meta.glob("../views/**/index.vue", {
    eager: false
})

let routes: Array<RouteRecordRaw> = []

for (let key in files) {
    let path = key.replaceAll(/(^\.\.\/views\/)|(\/index\.vue$)/g, "").split("/")
    let currentNode = routes
    for (let i = 0; i < path.length; i++) {
        let node = currentNode.find(item => item.name == path[i])
        if (!node) {
            node = {
                children: [],
                path: i === 0 ? `/${path[i]}` : `${path[i]}`,
                name: path[i],
                component: files[key] as () => Promise<unknown>,
            }
            currentNode.push(node)
        }
        currentNode = node.children as Array<RouteRecordRaw>
    }
}

routes.unshift({
    path: '',
    redirect: "/home",
})


const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

router.beforeEach((to, from) => {
    //如果没有用户id(未登录)并且当前不是登录页
    if (!UserStore().id && to.name !== 'login' && to.name !== '404') {
        return {name: 'login'}
    }
})


export default router