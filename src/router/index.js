import Vue from 'vue'
import Router from 'vue-router'
import vueSelect from '@/components/miaov/1_vue_select.vue'
import qqList from '@/components/miaov/2_qq_list.vue'
import messageBoard from '@/components/miaov/3_message_board.vue'
import vueSwiper from '@/components/miaov/4_swiper.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/miaov/1_vue_select',
    name: 'vueSelect',
    component: vueSelect
  }, {
    path: '/miaov/2_qq_list',
    name: 'qqList',
    component: qqList
  }, {
    path: '/miaov/3_message_board',
    name: 'messageBoard',
    component: messageBoard
  }, {
    path: '/miaov/4_swiper',
    name: 'vueSwiper',
    component: vueSwiper
  }]
})
