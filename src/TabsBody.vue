<template>
  <div class="g-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabs-body",
  inject:['eventBus'],
  created(){

  }
};
</script>

<style lang="scss" scoped>
.g-tabs-body{

}

</style>
