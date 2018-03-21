import Vue from 'vue'
import Router from 'vue-router'

// miaov 作业练习
import vueSelect from '@/components/miaov/1_vue_select.vue'
import qqList from '@/components/miaov/2_qq_list.vue'
import messageBoard from '@/components/miaov/3_message_board.vue'
import vueSwiper from '@/components/miaov/4_swiper.vue'
import vueSelect2 from '@/components/miaov/5_list_show.vue'
import radioVue from '@/components/miaov/6_radio.vue'
import grade from '@/components/miaov/7_grade.vue'
import todolist from '@/components/todolist.vue'
import miaovList from '@/components/miaovList.vue'

// 项目：新闻站
import newshome from '@/components/newshome.vue'

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
  }, {
    path: '/miaov/5_list_show',
    name: 'vueSelect2',
    component: vueSelect2
  }, {
    path: '/miaov/6_radio',
    name: 'radioVue',
    component: radioVue
  }, {
    path: '/miaov/7_grade',
    name: 'grade',
    component: grade
  }, {
    path: '/todolist',
    name: 'todolist',
    component: todolist
  }, {
    path: '/miaovList',
    name: 'miaovList',
    component: miaovList
  }, {
    path: '/newshome',
    name: 'newshome',
    component: newshome
  }]
})
