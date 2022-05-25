---
title: Input-输入框
---
# 输入框
**简单用法**

**用法**
<ClientOnly>
<imput-doem/>
</ClientOnly>


**代码**
~~~vue
<g-input value="中文"/>
<g-input value="中文" disabled/>
<g-input value="中文" readonly/>
~~~

**双向绑定**


**预览**

<ClientOnly>
<input-model></input-model>
</ClientOnly>



**代码**
~~~vue
data:{
  value: '1'
}

<g-input v-model="value"></g-input>
<div>
  value: {{value}}
</div>
~~~
