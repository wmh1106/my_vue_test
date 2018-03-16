<template>
  <div id="app" >
    <div style="position:absolute;left:0; top:0;">
      <router-link to="/miaov/1_vue_select">1仿 select 框</router-link>
    <br />
    <router-link to="/miaov/2_qq_list">2仿 QQ 好友列表</router-link>
    <br />
    <router-link to="/miaov/3_message_board">3简易留言板</router-link>
    <br />
    <router-link to="/miaov/4_swiper">4 简易轮播</router-link>
    <br />
    </div>
    <div style="width:300px; margin:0 auto;">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      message: 'hello!',
      hh: '我是 hehe'
    }
  },
  watch: {
    hh: function (newValue, prevValue) {
      console.log('newValue:' + newValue, 'prevValue:' + prevValue)
    }
  },
  methods: {

  },
  directives: {

  }
}
/*
自定义指令：
1. 自定义指令，都写在组件的`directives`属性里，`directives`是跟数据、方法、计算属性同级的
2. 自定义指令名，就是`directives`属性的`key`值，使用时加`v-`
3. 自定义指令也是一个对象，先确定这个指令需要在哪个时间起作用。一共有5个钩子函数，跟`Vue`生命周期函数性质一样。[文档](https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0)
4. 在钩子函数里写逻辑代码
  - 钩子函数的参数，除了 el 之外，其它参数都应该是只读的，切勿进行修改
  - 既然`binding`是只读的，我就存个变量里。保证引用地址不同，然后就修改这个新定义的变量就好了。binding 对象里的属性值不变。

修饰符：是通过钩子函数的第二个参数binding.modifiers获取，它是一个对象，如果你获取了，binding.modifiers.a === true 说明，在模板中使用了。如：v-demo:foo.a
然后我就通过判断：binding.modifiers.a 是不是等于 true
来写逻辑代码
*/
</script>
<style>
body {
  margin: 0;
}
.fade1-enter-active,
.fade1-leave-active {
  transition: opacity 0.5s;
}
.fade1-enter,
.fade1-leave-to {
  opacity: 0;
}
</style>
