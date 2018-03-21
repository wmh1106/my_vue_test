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

<style scoped lang="less" >
// 头部
.jc_header {
  width: 100%;
  background: #222;
  header {
    width: 1140px;
    height: 50px;
    margin: 0 auto;
    color: #fff;
    background: #222;
    a {
      color: #fff;
    }
    @media screen and (max-width: 768px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
  .menu {
    display: none;
    float: right;
    height: 50px;
    align-items: center;
    a {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #333;
      border-radius: 5px;
      margin-left: 10px;
      text-align: center;
      font-size: 24px;
    }
    .move_search {
      //background: url('../images/icon/search.png') no-repeat center center;
      // background-size: 30px auto;
    }
    .move_menu_btn {
      // background: url('../images/icon/menu.png') no-repeat center center;
      // background-size: 30px auto;
    }
    @media screen and (max-width: 768px) {
      display: flex;
    }
  }
  .logo {
    float: left;
    margin: 0;
    font-size: 18px;
    line-height: 50px;
    font-weight: 100;
    img {
      width: 30px;
      height: 30px;
    }
  }
  nav {
    float: left;
    margin-left: 40px;
    display: flex;
    .nav_link {
      position: relative;
      & > a {
        position: relative;
        display: block;
        width: 110px;
        line-height: 50px;
        color: #fff;
        text-align: center;
        text-decoration: none;
        &.active {
          background: #008df3;
        }
        &.dropdown::after {
          content: "";
          position: absolute;
          right: 10%;
          top: 50%;
          width: 0;
          height: 0;
          transform: translate(0%, -50%);
          border-color: transparent;
          border-width: 5px;
          border-style: solid;
          border-top-color: #fff;
        }
      }
      .dropdown_list {
        display: none;
        position: absolute;
        left: 0;
        top: 100%;
        li {
          min-width: 110px;
          line-height: 30px;
          background: #ddd;
          padding-left: 10px;
        }
        a {
          color: #000;
        }
      }
    }
  }
  .search_box {
    float: right;
    width: 237px;
    height: 32px;
    border-radius: 5px;
    background: #fff;
    overflow: hidden;
    margin-top: 9px;
    input {
      float: left;
      border: none;
      padding: 1;
      background: none;
    }
    input[type="text"] {
      width: 200px;
      height: 32px;
      padding-top: 5px;
      padding-left: 10px;
    }
    input[type="submit"] {
      width: 30px;
      height: 32px; // padding: 0;
      background: url("../../common/images/icon/search.png") no-repeat center
        center;
      background-size: 20px 20px;
    }
  }
  .login_box {
    float: right;
    line-height: 50px;
    a {
      font-size: 14px;
      padding: 5px;
      margin-left: 25px;
    }
  }
}
</style>
