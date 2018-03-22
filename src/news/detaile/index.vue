<template>
  <div>我是详情页 我从父级拿到的id是{{id}}</div>
</template>
<script>
export default {
  name: 'register',
  data () {
    return {
      id: ''
    }
  },
  mounted () {
    this.id = this.$route.query.id
  }
}
</script>
