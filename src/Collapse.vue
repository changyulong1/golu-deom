<template>
<div class="g-collapse">
  <slot></slot>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  name: "Collapse",
  props:{
    single:{
      type:Boolean,
      default:false
    },
    selected:{
      type:String
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {
      eventBus:this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected',this.selected)
    this.eventBus.$on('update:selected',(name)=>{
      console.log(name)
      this.$emit('update:selected',name)
    })
  }
};
</script>

<style lang="scss" scoped>
$border-color:#ddd;
$border-radius:4px;
.g-collapse{
  border: 1px solid $border-color;
  border-radius: $border-radius;

}

</style>
