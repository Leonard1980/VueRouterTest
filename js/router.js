import TestPage from './pages/testPage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
var router = new VueRouter({
    linkActiveClass: 'active',
    routes: [
       { path: '/foo', component: TestPage },
       { path: '/bar', component: TestPage },
       { path: '/baz', component: TestPage },
       {
         path: '*',
         redirect: '/foo'
       }
    ]
});
export default router
