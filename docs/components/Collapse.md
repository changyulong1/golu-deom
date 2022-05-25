---
title: Collapse-折叠面板
---

# 折叠面板


## 简单使用

**预览**

<ClientOnly>
<collapse-deom1></collapse-deom1>
</ClientOnly>



**代码**
~~~vue
<g-collapse :selected.sync="selected">
      <g-collapse-time title="标题1" name="1">内容1</g-collapse-time>
      <g-collapse-time title="标题2" name="2">内容2</g-collapse-time>
      <g-collapse-time title="标题3" name="3">内容3</g-collapse-time>
</g-collapse>

<script >
export default {
  data(){
    return {
      selected:['1']
    }
  }
};
</script>

~~~



### 手风琴

**预览**

<ClientOnly>
<Collapse-deom></Collapse-deom>
</ClientOnly>

**代码**
~~~vue

 <g-collapse :selected.sync="selected" single>
      <g-collapse-time title="标题1" name="1">内容1</g-collapse-time>
      <g-collapse-time title="标题2" name="2">内容2</g-collapse-time>
      <g-collapse-time title="标题3" name="3">内容3</g-collapse-time>
 </g-collapse>
 <script >
 export default {
   data(){
     return {
       selected:['1']
     }
   }
 };
 </script>

~~~



