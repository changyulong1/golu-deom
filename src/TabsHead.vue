<template>
  <div class="g-tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject:['eventBus'],
  mounted(){
    console.log('head',this.eventBus)
  }
};
</script>

<style lang="scss" scoped>
.g-tabs-head{

}


</style>
