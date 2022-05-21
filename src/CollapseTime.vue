<template>
<div class="g-collapse-time">
  <div class="title">
    {{ title }}
  </div>
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: "CollapseTime",
  props:{
    title:{
      type:String,
      readable:true
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color:#ddd;
$border-radius:4px;
.g-collapse-time{
  >.title{
    border: 1px solid $border-color;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    display: flex;
    align-items: center;
    padding:  0 8px;
  }
  &:first-child{
    >.title{
      border-top-right-radius: $border-radius;
      border-top-left-radius: $border-radius;
    }
  }
  &:last-child{
    >.title:last-child{
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
  }
  >.content{
    padding: 8px;
  }
}

</style>
