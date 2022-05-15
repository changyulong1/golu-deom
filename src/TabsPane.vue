<template>
  <div class="g-tabs-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsPane",
  inject:['eventBus'],
  props:{
    name:{
      type:String | Number,
      required:true
    }
  },
  created(){
    console.log('pane',this.eventBus)
  }
}
</script>

<style lang="scss" scoped>
.g-tabs-pane{

}

</style>
