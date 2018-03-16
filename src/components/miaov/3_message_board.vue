<template>
  <div class="message">
    <p>点击提交按钮或按回车键，都可以</p>
    <input type="text" name="" id="" v-model="message" @keydown.enter="update">
    <input type="button" value="提交" @click="update">
    <hr/>
    <ul>
      <li v-for="(item,idx) in list" :key="idx" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [],
      message: ''
    }
  },
  methods: {
    update () {
      this.list.unshift(this.message)
      this.message = ''
    }
  }
}
</script>
