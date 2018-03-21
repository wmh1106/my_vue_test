<template>
<div class="news_site">
  <!-- 移动端头部 -->
  <header-move></header-move>
  <!-- 容器 -->
  <div class="main_content">
    <!-- 头部 -->
    <headerModule></headerModule>
    <!-- 主体 -->
    <!-- <section class="jc_content mt_20 clearfix"> -->
      <router-view></router-view>
    <!-- </section> -->

    <!-- 底部 -->
    <footerModule></footerModule>
  </div>
  <!-- back top -->
  <div class="top">
    <a href="javascript:;" class="erweima">
      <i class="far fa-qrcode"></i>
    </a>
    <a href="javascript:;" class="back_top">
      <i class="fas fa-qrcode"></i>
    </a>
  </div>
</div>
</template>

<script>

import headerMove from './components/header_move'
import headerModule from './components/header'

import footerModule from './components/footer'

import 'static/css/bootstrap.css'
import '@/news/common/less/index.less'
export default {
  components: {
    headerMove,
    headerModule,
    footerModule
  }
}
</script>
