---
title: Layout-布局
---
# 布局

## 布局1

**预览**

<ClientOnly>
<layout-deom></layout-deom>
</ClientOnly>

**代码**

~~~vue
  <g-layout style="color: white; margin-bottom:50px;">
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
~~~

## 布局2

**预览**

<ClientOnly>
<layout-deom1></layout-deom1>
</ClientOnly>



**代码**
~~~Vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
<g-header style="height: 50px; background:lightskyblue;">
  header
</g-header>
    <g-layout>
      <g-aside style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </g-aside>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
</g-layout>
~~~

## 布局3

**预览**

<ClientOnly>
<layout-deom2></layout-deom2>
</ClientOnly>



**代码**
~~~Vue
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
<g-header style="height: 50px; background:lightskyblue;">
  header
</g-header>
    <g-layout>
      <g-aside style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </g-aside>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
    </g-layout>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
</g-layout>
~~~


