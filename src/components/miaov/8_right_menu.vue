
<style>
.menuList {
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100px;
  height: 200px;
  list-style: none;
  border: 1px solid rgba(255, 0, 0, 0.8);
}

.menuList li {
  margin: 0;
  padding: 0;
  line-height: 24px;
  padding-left: 10px;
  list-style: none;
  color: #666;
}

.menuList li:hover {
  background: #ddd;
}

.menu_vue {
  width: 500px;
  height: 500px;
  border: 1px solid #ddd;
}
</style>

<template>
  <div>
    <div class="menu_vue" v-menu></div>
    <pre>
      ## 作业1-自定义右键菜单

      - 监听contextmenu事件
        1. 阻止默认事件
        2. 添加 ul —— (自定义右键菜单)
        3. 自定义属性menuIsShow - true
          - true:显示
          - false:消失

      - 监听click事件（委托事件相关）
        1. 在 ul 上面点-消失
        2. 在 li 上面点-执行功能-消失
        3. 在 ul 之外的区域点-消失
    </pre>
  </div>
</template>

<script>
export default {
  directives: {
    menu: {
      bind: (el, binding) => {
        el.menuIsShow = false
        const html = `<li>新建</li><li>删除</li><li>复制</li><li>粘贴</li><li>查看</li><li>快乐</li>`
        const menu = document.createElement('ul')
        menu.classList.add('menuList')
        menu.innerHTML = html

        el.addEventListener('contextmenu', function (ev) {
          ev.preventDefault()
          menu.style.cssText = `left:${ev.x}px;top:${ev.y}px;`
          el.appendChild(menu)
          el.menuIsShow = true
        })

        el.addEventListener('click', function (ev) {
          if (ev.target.classList.contains('menuList')) {
            console.log('执行操作1')
            alert('隐藏菜单')
          } else if (ev.target.parentNode.classList.contains('menuList')) {
            console.log('执行操作2')
            alert(ev.target.innerText)
          }
          if (el.menuIsShow) {
            el.removeChild(menu)
          }
          el.menuIsShow = false
        })
      }
    }
  }
}
</script>
