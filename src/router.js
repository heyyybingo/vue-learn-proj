import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeContainer from './components/HomeContainer.vue'
import MemberContainer from './components/MemberContainer.vue'
import SearchContainer from './components/SearchContainer.vue'
import ShopcarContainer from './components/ShopcarContainer.vue'
import newsList from './components/news/newsList.vue'
import newsInfo from './components/news/newsInfo.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes: [{
            path: '/home',
            component: HomeContainer
        },
        {
            path: '/member',
            component: MemberContainer
        },
        {
            path: '/shopcar',
            component: ShopcarContainer
        },
        {
            path: '/search',
            component: SearchContainer
        },
        {
            path: '/home/newsList',
            // render: c => c('./components/news/newsList.vue')
            component: newsList
        },
        {
            path: '/home/newsInfo/:id',

            component: newsInfo
        },
    ]
})


export default router