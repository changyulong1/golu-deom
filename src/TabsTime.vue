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
    },
    name:{
      type:String | Number,
      required:true
    }
  },
  inject:['eventBus'],
  created(){
    console.log('time',this.eventBus)
  }
};
</script>

<style lang="scss" scoped>
.g-tabs-time{

}

</style>
