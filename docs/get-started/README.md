---
title: 快速上手
---

# 快速上手

首先需要做以下的reset css

~~~css
* {margin: 0; padding:0; box-sizing:border-box;}
~~~

然后引入组件
~~~js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入组件库
import  goLongUi from 'golong-ui'
//引入样式
import 'golong-ui/dist/index.css'
Vue.config.productionTip = false
//挂载
Vue.use(goLongUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
~~~

简单的使用

~~~vue
<template>
  <div id="app">
    <g-button>{{  name }}</g-button>
  </div>
</template>
<script>
export default {
    data(){
      return {
        name:'按钮 '
      }
    }
}
</script>
<style lang="scss">
* {margin: 0; padding:0; box-sizing:border-box;}
</style>
~~~

页面显示

<button-icon></button-icon>
