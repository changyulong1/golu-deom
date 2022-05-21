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
      required:true,
    }
  },
  inject:{
    eventBus:{
      from:'eventBus',
      default:null
    }
  },
  computed:{
    classes(){
      return {
        active:this.active,
        disabled:this.disabled
      }
    }
  },
  created(){
    if(this.eventBus){
      this.eventBus.$on('update:selected',(name,vm)=>{
        this.active = this.name === name;
      })
    }
  },
  methods:{
    onclick(){
      if(this.disabled){return}
      this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
      this.$emit('click', this)
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
