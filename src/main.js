console.log('OK')
import Vue from 'vue'
import app from './App.vue'
import router from './router.js'
import {
    Header,
    Tabbar,
    TabItem
} from 'mint-ui'
import './lib/icon/font_2cnnszcve7q/iconfont.css'
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

var vm = new Vue({
    router,
    el: '#app',
    render: c => c(app),

})