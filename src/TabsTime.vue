<template>
  <div class="g-tabs-time" @click="onclick" :class="classes" :data-name="name">
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
        active:this.active,
        disabled:this.disabled
      }
    }
  },
  created(){
    this.eventBus.$on('update:selected',(name,vm)=>{
      this.active = this.name === name;
    })
  },
  methods:{
    onclick(){
      if(this.disabled){return}
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
};
</script>

<style lang="scss" scoped>
.g-tabs-time{
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  &.active{
    color: blueviolet;
  }
  &.disabled{
    opacity: 0.2;
    cursor: not-allowed;
  }
}

</style>
