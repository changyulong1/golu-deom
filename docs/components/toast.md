---
title: Toast - 通知
---

# Toast

## this.$toast

**预览**

<toast-deom></toast-deom>

**代码**

~~~Vue

<style>
.wrapper {
  z-index: 30;
}
</style>
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
~~~

## 设置关闭按钮

**预览**

<toast-deom1></toast-deom1>

**代码**

~~~vue

<g-button @click="onClick">上方弹出</g-button>
<script >
export default {
  methods: {
    onClick(){
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  }
};
</script>


~~~
