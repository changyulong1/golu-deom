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
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    if(this.eventBus){
      return {
        eventBus:this.eventBus
      }
    }
  },
  mounted() {
    this.eventBus.$on('update:select',(vm)=>{
      this.$children.forEach((time)=>{
        if(this.single){
            console.log('什么都不做')
        }else{
          if(time === vm){
            time.show = true
          }else{
            time.show = false
          }
        }
      })
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
