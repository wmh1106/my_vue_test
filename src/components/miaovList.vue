<template>
  <div class="miaovList">
    <div style="position:absolute;left:0; top:0;">
      <router-link to="/miaov/1_vue_select">1仿 select 框</router-link>
      <br />
      <router-link to="/miaov/2_qq_list">2仿 QQ 好友列表</router-link>
      <br />
      <router-link to="/miaov/3_message_board">3简易留言板</router-link>
      <br />
      <router-link to="/miaov/4_swiper">4 简易轮播</router-link>
      <br />
      <router-link to="/miaov/5_list_show">5 列表展开收缩</router-link>
      <br />
      <router-link to="/miaov/6_radio">6 模拟单选</router-link>
      <br />
      <router-link to="/miaov/7_grade">7 评分</router-link>
      <br />
      <router-link to="/todolist">8 todolist</router-link>
      <br />
    </div>

    <div style="width:550px; margin:0 auto;">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style>

</style>
