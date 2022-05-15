<template>
  <div class="g-tabs-body">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsBody",
  inject:['eventBus'],
  created(){

  }
};
</script>

<style lang="scss" scoped>
.g-tabs-body{
  border-top: 1px solid #ccc;
  padding: 1em 0;

}

</style>
