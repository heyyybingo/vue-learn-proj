console.log('OK')
import Vue from 'vue'
import app from './App.vue'
import router from './router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {
    Header,
    Tabbar,
    TabItem,
    Swipe,
    SwipeItem,
    InfiniteScroll,
    Button
} from 'mint-ui'

import './lib/icon/font_q4u7hjhkkkh/iconfont.css'
import './lib/icon/font_2cnnszcve7q/iconfont.css'

Vue.component(Header.name, Header);
Vue.component(Button.name, Button);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueAxios, axios);
Vue.use(InfiniteScroll);
var vm = new Vue({
    router,
    el: '#app',
    render: c => c(app),

})