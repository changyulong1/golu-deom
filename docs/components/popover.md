---
title: popover-弹出层
---
# 弹出层

## 支持HTML

**预览**


<ClientOnly>
<popover-deom></popover-deom>
</ClientOnly>




**代码**
~~~vue
<g-popover>
<g-button>上方弹出</g-button>
<template slot="content">
弹出内容
</template>
</g-popover>
<g-popover position="bottom">
<g-button>下方弹出</g-button>
<template slot="content">
弹出内容
</template>
</g-popover>
<g-popover position="left">
<g-button>左边弹出</g-button>
<template slot="content">
弹出内容
</template>
</g-popover>
<g-popover position="right">
<g-button>右边弹出</g-button>
<template slot="content">
弹出内容
</template>
</g-popover>

~~~

## 将触发方式改为 hover

**预览**

<ClientOnly>
<popover-deom1></popover-deom1>
</ClientOnly>


**代码**
~~~vue
  <g-popover  trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
~~~
