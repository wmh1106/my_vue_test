<template>
<div class="grade">
  <h4>百度文库评分 — 扩展</h4>
  <ul>
    <li v-for="(item,index) in textList"
      :key="index"
      :class="{active:item.check}"
      @click="fnClick(index)"
      @mouseover="fnMouseOver(index)"
      @mouseout="fnMouseOut(index)"></li>
  </ul>
  <span v-text="text"></span>
</div>
</template>
<script>
export default {
  data () {
    return {
      text: '',
      isArrCheck: [],
      isClick: false,
      textList: [{
        text: '极差',
        check: false
      }, {
        text: '一般',
        check: false
      }, {
        text: '不错',
        check: false
      }, {
        text: '推荐',
        check: false
      }, {
        text: '力推',
        check: false
      }]
    }
  },
  methods: {
    fnMouseOver (index) {
      this.text = this.textList[index].text

      this.textList.map((e, idx) => {
        e.check = idx <= index
      })
    },

    fnMouseOut () {
      if (this.isClick) {
        this.textList.map((e, index) => {
          e.check = this.isArrCheck[index]
        })
      } else {
        this.textList.map(e => {
          e.check = false
        })
      }
    },
    fnClick (index) {
      this.isClick = true
      this.isArrCheck = this.isArrCheck.map((e, idx) => {
        return idx <= index
      })
    }
  },
  created () {
    this.isArrCheck = this.textList.map(e => false)
  }
}
</script>
<style scoped>
.grade ul {
  display: flex;
}
.grade li {
  padding: 0;
  margin: 0;
  width: 50px;
  height: 50px;
  background: #ddd;
  list-style: none;
  margin: 0 2px;
}
.grade li.active {
  background: green;
}
.grade li.activeClick {
  background: pink;
}
</style>
