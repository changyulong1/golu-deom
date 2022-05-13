<template>
<div class="g-layout" :class="layClass">
  <slot></slot>
</div>
</template>

<script lang="ts">
export default {
  name: "Layout",
  data(){
    return {
      layClass:{
        hasAside:false
      }
    }
  },
  mounted(){
    this.$children.forEach((vm)=>{
      if(vm.$options.name === 'Aside'){
        this.layClass.hasAside=true
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.g-layout{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasAside{
    flex-direction: row;
  }
}

</style>
