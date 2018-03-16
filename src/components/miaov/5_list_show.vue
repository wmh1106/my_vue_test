<template>
  <div>
    <h1>列表展开收缩</h1>
    <span @click="fnShow">点击菜单</span>
    <ul v-show="isShow">
      <li v-for="(item,idx) in list" :key="idx" v-text="item"></li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false,
      list: ['朋友1', '朋友2', '朋友3', '朋友4', '朋友5']
    }
  },
  methods: {
    fnShow () {
      this.isShow = !this.isShow
    }
  }
}
</script>
