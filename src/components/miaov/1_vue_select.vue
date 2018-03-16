<template>
  <div class="select">
    <span class="title" @click="isShow" v-text="selectActive ? selectActive : '请选择'"></span>
    <ul class="list" v-show="show">
      <li v-for="(item,idx ) in selectList" :key="idx" @click="fnSelect(idx)" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      selectActive: '',
      selectList: ['新闻', '微博', '图片', '博客', '视频']
    }
  },
  methods: {
    isShow () {
      this.show = !this.show
    },
    fnSelect (idx, show) {
      this.selectActive = this.selectList[idx]
      this.show = !this.show
    }
  }
}
</script>
<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
.select {
  width: 300px;
  background: #f2f2f2;
  margin: 20px auto;
  padding: 40px;
  min-height: 600px;
  border-radius: 10px;
}
.title {
  display: block;
  border: 1px solid #aaa;
  height: 24px;
  width: 100px;
  padding: 2px 5px;
  position: relative;
  border-radius: 3px;
  background: #f7ede0;
}
.title:after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 10px solid #999;
  position: absolute;
  right: 6px;
  top: 10px;
}
.list {
  width: 110px;
  padding: 5px 0;
  line-height: 24px;
  border: 1px solid #aaa;
  border-top: 0;
  background: #f7ede0;
}
.list li {
  list-style: none;
  padding: 0 10px;
}

.list li:hover {
  background: #f2e0c9;
}
</style>
