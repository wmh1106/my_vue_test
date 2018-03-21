<template>
  <section class="jc_content mt_20 clearfix">
      <!-- 内容【左侧】 -->
      <!-- 内容 -->
      <div class="main_box">
        <banner></banner>
        <navList></navList>
        <listArticle></listArticle>
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
        <listFastSidebar></listFastSidebar>
        <hot></hot>
        <todaySpeak></todaySpeak>
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
import banner from '../components/banner'
import listArticle from '../components/list_article'

// 侧边栏
import newChart from '../components/chart'
import tags from '../components/tags'
import listFastSidebar from '../components/list_fast_sidebar'
import hot from '../components/hot_news_list'
import todaySpeak from '../components/today_speak'
import navList from '../components/nav_list'

export default {
  components: {
    banner,
    navList,
    listArticle,
    // 侧边栏
    newChart,
    tags,
    listFastSidebar,
    hot,
    todaySpeak
  }
}
</script>
