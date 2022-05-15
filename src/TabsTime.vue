<template>
  <div class="g-tabs-time" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script >
export default {
  name: "TabsTime",
  data(){
    return {
      active:false
    }
  },
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
  },
  methods:{
    xxx(){
      this.eventBus.$emit('update:selected',this.name)
    }
  }
};
</script>

<style lang="scss" scoped>
.g-tabs-time{
  flex-shrink: 0;
  padding: 0 1em;
  &.active{
    background: red;
  }
}

</style>
