<template>
    <!-- footer -->
    <footer>
      <section class="jc_content clearfix">
        <div class="jc_news">
          <div class="img">
            <img src="../../common/images/logo.png" alt="">
          </div>
          <p>&copy; All rights reserved.</p>
        </div>
        <div class="ft_nav_list_one">
          <a href="###">关于我们</a>
          <a href="###">我要投稿</a>
          <a href="###">商务合作</a>
        </div>
        <div class="ft_nav_list_two">
          <a href="###">新闻</a>
          <a href="###">快讯</a>
          <a href="###">行情</a>
        </div>
        <div class="share_box">
          <a href="###">
            <img src="../../common/images/icon/share_icon1.png" alt="">
          </a>
          <a href="###">
            <img src="../../common/images/icon/share_icon2.png" alt="">
          </a>
          <a href="###">
            <img src="../../common/images/icon/share_icon3.png" alt="">
          </a>
          <a href="###">
            <img src="../../common/images/icon/share_icon4.png" alt="">
          </a>
          <a href="###">
            <img src="../../common/images/icon/share_icon5.png" alt="">
          </a>
        </div>
      </section>
    </footer>
</template>
<style lang="less" scoped>
// 底部
footer {
  width: 100%;
  padding-bottom: 32px;
  border-top: 1px solid #ddd;
  .jc_news {
    float: left;
    margin-top: 30px;
    font-size: 14px;
    color: #828a92;
    .img {
      position: relative;
      width: 60px;
      height: 60px;
      padding: 3px;
      border: 1px solid #008df3;
      border-radius: 5px;
      background: #fff;
      img {
        width: 52px;
        height: 52px;
        background: #008df3;
      }
    }
  }
  .ft_nav_list_one {
    margin-left: 245px;
  }
  .ft_nav_list_two {
    margin-left: 150px;
  }
  .ft_nav_list_one,
  .ft_nav_list_two {
    float: left;
    padding-top: 18px;
    a {
      margin-top: 20px;
      display: block;
      font-size: 16px;
      color: #3d464d;
    }
  }
  .share_box {
    float: right;
    padding-top: 16px;
    a {
      float: left;
      margin-right: 10px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
