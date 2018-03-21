<template>
<div class="news_site">
  <header-move></header-move>
  <!-- main -->
  <div class="main_content">
    <headerModule></headerModule>
    <!-- 主体 -->
    <section class="jc_content mt_20 clearfix">
      <sidebarModule></sidebarModule>
    </section>
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

import headerMove from './news/header_move.vue'
import headerModule from './news/header.vue'
import footerModule from './news/footer.vue'
import sidebarModule from './news/sidebar.vue'

export default {
  components: {
    headerMove,
    headerModule,
    footerModule,
    sidebarModule
  }
}
</script>
