---
title: grid-网格布局
---
# 网格

## 24格网格

**预览**

<ClientOnly>
<grid-deom></grid-deom>
</ClientOnly>



**代码**
~~~vue
<style>
* {
  box-sizing: border-box;
}
.demoRow{
  margin-bottom: 10px;
  .demoCol{
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<g-row class="demoRow">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
</g-row>

<g-row class="demoRow">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
~~~

## 设置 gutter

**预览**

<ClientOnly>
<grid-gutter></grid-gutter>
</ClientOnly>



**代码**
~~~vue
<style>
* {
  box-sizing: border-box;
}
.demoRow{
  margin-bottom: 10px;
  .demoCol{
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
 <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
~~~

## 设置空隙

**预览**

<ClientOnly>
<grid-offset></grid-offset>
</ClientOnly>




**代码**

~~~vue
<style>
* {
  box-sizing: border-box;
}
.demoRow{
  margin-bottom: 10px;
  .demoCol{
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
<g-row class="demoRow" gutter="10">
  <g-col span="8">
    <div class="demoCol">8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div class="demoCol">8</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div class="demoCol">6</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div class="demoCol">4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div class="demoCol">4</div>
  </g-col>
</g-row>
<g-row class="demoRow" gutter="10">
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2">
    <div class="demoCol">2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div class="demoCol">2</div>
  </g-col>
</g-row>
~~~
