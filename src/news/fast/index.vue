<template>
  <section class="jc_content mt_20 clearfix">
      <!-- 内容【左侧】 -->
      <!-- 内容 -->
      <div class="main_box">
        <!-- tab -->
        <navList></navList>
        <listFast></listFast>
      </div>

      <!-- 侧边栏 -->
      <div class="sidebar">
        <!-- 顶部广告 -->
        <div class="sidebar_top_ad">
          <a href="###">
            <img src="../common/images/img/ad2.png" alt="">
          </a>
        </div>
        <newChart></newChart>
        <hot></hot>
        <tags></tags>
        <!-- 广告位 -->
        <div class="sidebar_bottom_ad">
          <a href="###">
            <img src="../common/images/img/ad1.png" alt="">
          </a>
        </div>
        <div class="sidebar_bottom_ad">
          <a href="###">
            <img src="../common/images/img/ad1.png" alt="">
          </a>
        </div>
      </div>
    </section>
</template>
<script>
import mainModule from '../components/main'
import listFast from '../components/list_fast'
import navList from '../components/nav_list'
// 侧边栏
import newChart from '../components/chart'
import tags from '../components/tags'
import listFastSidebar from '../components/list_fast_sidebar'
import hot from '../components/hot_news_list'
import todaySpeak from '../components/today_speak'

export default {
  components: {
    mainModule,
    navList,
    listFast,
    // 侧边栏
    newChart,
    tags,
    listFastSidebar,
    hot,
    todaySpeak
  }
}
</script>
