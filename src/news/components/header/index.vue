<template>
<!-- 头部 -->
    <section class="jc_header">
      <header>
        <router-link class="logo" tag="h1" to="/news/home">
          <img src="../../common/images/logo.png" alt="">
          <span>网站名称</span>
        </router-link>
        <nav>
          <div class="nav_link">
            <!-- <a class="active" href="home.html">首页</a> -->
            <router-link to="/news/home">首页</router-link>
          </div>
          <div class="nav_link">
            <router-link to="/news/fast">24h 快讯</router-link>
          </div>
          <div class="nav_link">
            <router-link to="/news/market">行情</router-link>
          </div>
          <div class="nav_link">
            <a href="###" class="dropdown">联系我们</a>
            <ul class="dropdown_list">
              <li>
                <a href="###">内容一</a>
              </li>
              <li>
                <a href="###">内容2</a>
              </li>
              <li>
                <a href="###">内容3</a>
              </li>
              <li>
                <a href="###">内容4</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="login_box">
          <router-link to="/news/login">登录</router-link>
          <router-link to="/news/register">注册</router-link>
        </div>
        <div class="search_box">
          <form action="">
            <input type="text" name="" value="" placeholder="请输入关键字">
            <input type="submit" name="" value="">
          </form>
        </div>

        <div class="menu">
          <a href="###" class="move_search">
            <i class="fa fa-search" aria-hidden="true"></i>

          </a>
          <a href="###" class="move_menu_btn">
            <i class="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    </section>
</template>

<script>

export default {

}
</script>
