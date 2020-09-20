import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$bus = new Vue()

//使用fastclick:解决移动端300ms的延迟
import FastClick from 'fastclick'
FastClick.attach(document.body)

//图片懒加载
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/placeholder.png')
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')