<template>
  <div id="child">
    哈哈哈
    <input type="button" @click="fnclick">

    <span id="time">00:00</span>
  </div>
</template>
<script>
export default {
  methods: {
    fnclick () {
      this.$emit('childEvent')
    }
  }
}
</script>

<style scoped>
#child {
  position: absolute;
  left: 200px;
  top: 200px;
  border: 1px solid #ddd;
}
</style>
