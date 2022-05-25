---
title: Tabs - 标签
---
# 标签

**简单用法**

**预览**

<ClientOnly>
<tabs-deom></tabs-deom>
</ClientOnly>



**代码**
~~~vue
 <g-tabs selected="1">
      <g-tabs-head>
        <g-tabs-time name="1">标签1</g-tabs-time>
        <g-tabs-time name="2">标签2</g-tabs-time>
        <g-tabs-time name="3" disabled>标签2</g-tabs-time>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">内容1</g-tabs-pane>
        <g-tabs-pane name="2">内容2</g-tabs-pane>
        <g-tabs-pane name="3">内容3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
~~~
