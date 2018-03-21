<template>
          <!-- 主体 -->
    <section class="jc_content mt_40 login_main_box">
      <div class="login_header clearfix">
        <!-- <h1 class="title">登录账号，资讯获取更简单</h1> -->
        <h1 class="title">登录账号</h1>
        <a class="register" href="###">注册新账号</a>
      </div>
      <div class="login_content">
        <h2 class="title">账号密码登录</h2>
        <div class="login_form">
          <form action="###" method="post">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </span>
              <input type="text" class="form-control" placeholder="邮箱" aria-describedby="basic-addon1">
            </div>
            <div class="input-group">
              <span class="input-group-addon">
                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
              </span>
              <input type="text" class="form-control" placeholder="密码" aria-describedby="basic-addon1">
            </div>
            <div class="password_link">
              <router-link to="/news/password">忘记登录密码？</router-link>
            </div>
            <div class="btn-group btn-group-justified" role="group" aria-label="...">
              <div class="btn-group" role="group">
                <button type="button" class="btn btn-primary">立即登录</button>
              </div>
            </div>
          </form>
          <div class="other_login_box">
            <div class="other_login_title">或 社交网络登录</div>
            <ul class="other_login_link">
              <li>
                <a href="###">
                  <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="###">
                  <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="###">
                  <i class="fa fa-odnoklassniki-square" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>
