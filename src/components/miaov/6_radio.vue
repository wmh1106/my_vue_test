<template>
  <div class="radio">
    <h1>模拟单选</h1>
    <div>
      <span :class="{active:(check===index)}" v-for="(item,index) in radioList" :key="index" v-text="item" @click="fnCheck(index)"></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      check: 0,
      radioList: ['男', '女', '保密']
    }
  },
  methods: {
    fnCheck (idx) {
      this.check = idx
    }
  }
}
</script>
<style scoped>
.radio span {
  border: 1px solid #ddd;
  padding: 4px 10px;
}
.radio span.active {
  border: 1px solid red;
}
</style>
