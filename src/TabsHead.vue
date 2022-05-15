<template>
  <div class="g-tabs-head">
    <slot></slot>
    <div class="actions-wrapper ">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject:['eventBus'],
  mounted(){

  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.g-tabs-head{
  display: flex;
  height:$tab-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  >.actions-wrapper{
    margin-left: auto;
    margin-right: 1em;
  }

}


</style>
