<template>
  <div class="box">
    <div class="select" v-for="(item,idx) in selectData" :key="item.id">
      <span class="title" v-text="item.name" @click="tab(item,idx)"></span>
      <ul class="list" v-show="show_index == idx">
        <li  v-for="(itemChild,index) in item.list"
        :key="index"
        v-text="itemChild"
        @click="addClass(item,index)"
        :class="{active: item.addClassIndex === index ? true : false}"></li>
      </ul>
    </div>
  </div>
</template>
<script>
const data = [{
  id: '1',
  name: '我的好友',
  addClassIndex: -1,
  list: ['小佳', '小明', '小胖', '小二']
}, {
  id: '2',
  name: '企业好友',
  addClassIndex: -1,
  list: ['小佳2', '小明2', '小胖2', '小二2']
}, {
  id: '3',
  name: '黑名单',
  addClassIndex: -1,
  list: ['小佳3', '小明3', '小胖3', '小二3']
}]
export default {
  data () {
    return {
      selectData: data,
      show_index: -1
    }
  },
  methods: {
    addClass (item, currentIndex) {
      item.addClassIndex = currentIndex
    },
    tab (item, idx) {
      if (this.show_index === idx) {
        this.show_index = -1
        item.addClassIndex = -1
      } else {
        this.show_index = idx
      }
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
  padding: 10px;
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
.list li.active {
  background: #889110;
  color: #fff;
}
</style>
