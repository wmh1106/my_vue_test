<template>
  <!-- 移动端 header -->
  <div class="move_nav">
    <div class="move_login">
      <a href="###">登录</a>
      <span>|</span>
      <a href="###">注册</a>
    </div>

    <ul class="nav_list">
      <li>
        <a href="home.html" class="active">首页</a>
      </li>
      <li>
        <a href="24h.html">24h快讯</a>
      </li>
      <li>
        <a href="###">行情</a>
      </li>
    </ul>
  </div>
</template>
<style lang="less" scoped>
// 移动端头部
.move_nav {
  position: fixed;
  left: auto;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
  width: 130px;
  background: #222;
  transform: translate(130px, 0);
  transition: 0.5s;
  .move_login {
    height: 50px;
    line-height: 50px;
    display: flex;
    justify-content: space-around;
    color: #fff;
    a {
      display: block;
      color: #fff;
      font-size: 15px;
      padding: 2px 10px;
    }
  }
  .nav_list {
    a {
      display: block;
      line-height: 42px;
      text-align: center;
      color: #fff;
      &.active {
        background: #000;
      }
    }
  }
  &.move {
    &.move {
      transform: translate(0px, 0);
    }
  }
}
</style>
