<template>
  <div class="g-tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsPane",
  data(){
   return {
     active:false
   }
  },
  inject:['eventBus'],
  props:{
    name:{
      type:String | Number,
      required:true
    }
  },
  computed:{
    classes(){
      return {
        active:this.active
      }
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name)=>{
      this.active = this.name === name;
    })
  }
}
</script>

<style lang="scss" scoped>
.g-tabs-pane{
  &.active{

  }

}

</style>
