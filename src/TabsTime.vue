<template>
  <div class="g-tabs-time">
    <slot></slot>
  </div>
</template>

<script >
export default {
  name: "TabsTime",
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  }
};
</script>

<style lang="scss" scoped>
.g-tabs-time{

}

</style>
