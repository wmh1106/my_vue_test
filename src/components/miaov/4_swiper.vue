<style scoped>
.area {
  width: 625px;
  height: 315px;
  margin: 20px auto;
  position: relative;
  cursor: pointer;
}
/* 前、后按钮 */
.area .btn a {
  display: block;
  height: 47px;
  width: 32px;
  position: absolute;
  top: 120px;
  z-index: 1;
  opacity: 0.5;
}

.area .btn .prevBtn {
  background: url("../../assets/4/btn01.jpg") no-repeat;
  left: 0;
}

.area .btn .nextBtn {
  background: url("../../assets/4/btn02.jpg") no-repeat;
  right: 0;
}
.prevBtn:hover,
.nextBtn:hover {
  opacity: 1;
}
/* 下标背景条 */
.area .bg {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 34px;
  background: #a45f75;
}
/* 轮播的图片 */
.area .imgBox {
  width: 625px;
  height: 315px;
  overflow: hidden;
}
.area .imgBox img {
  display: block;
}
/* 下标 */
.area .jsNav {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0px;
  display: flex;
  justify-content: center;
}
.area .jsNav .itarget {
  position: relative;
  height: 34px;
  width: 40px;
}
.area .jsNav .itarget img {
  position: absolute;
  left: -50%;
  top: 100%;
  width: 100px;
  height: 50px;
  border: 4px solid pink;
  border-radius: 10px;
}
.area .jsNav .itarget a {
  display: block;
  width: 40px;
  font-size: 14px;
  line-height: 33px;
  text-align: center;
  color: #fff;
  text-decoration: none;
}
.area .jsNav .itarget a:hover,
.area .jsNav .itarget a.active {
  background: #fff;
  border-radius: 10px;
  color: #ff1555;
}
</style>

<template>
  <div class="area">
    <div class="btn">
      <a class="prevBtn" href="javascript:;" @click="prev"></a>
      <a class="nextBtn" href="javascript:;" @click="next"></a>
    </div>
    <div class="imgBox">
      <img v-for="(item,index) in imgList" v-show="currentIndex === index" :key="index" :src="item">
    </div>
    <div class="bg"></div>
    <div class=jsNav>
      <div class="itarget" v-for="(item,idx) in imgList" :key="idx" @click="clickImg(idx)" @mouseover="showBreviaryImg(idx)">
        <img :src="item" v-show="isArrShow[idx]">
        <a :class="{active:currentIndex === idx}" href="javascript:;" v-text="idx+1"></a>
      </div>
    </div>
  </div>
</template>
<script>

import img1 from '@/assets/4/01.jpg'
import img2 from '@/assets/4/02.jpg'
import img3 from '@/assets/4/03.jpg'
import img4 from '@/assets/4/04.jpg'
import img5 from '@/assets/4/05.jpg'

export default {
  data () {
    return {
      currentIndex: 0,
      imgList: [img1, img2, img3, img4, img5],
      isArrShow: [false, false, false, false, false]
    }
  },
  methods: {
    prev () {
      this.currentIndex -= 1
      if (this.currentIndex < 0) {
        this.currentIndex = 0
      }
    },
    next () {
      this.currentIndex += 1
      if (this.currentIndex >= this.imgList.length) {
        this.currentIndex = this.imgList.length - 1
      }
    },
    showBreviaryImg (idx) {
      this.isArrShow = this.isArrShow.map(e => false)
      this.isArrShow[idx] = true
    },
    clickImg (idx) {
      this.currentIndex = idx
    }
  }
}
</script>
