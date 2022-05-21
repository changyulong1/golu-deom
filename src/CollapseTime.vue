<template>
<div class="g-collapse-time" >
  <div class="title" @click="onClick">
    {{ title }}
  </div>
  <div class="content" v-show="show">
    <slot></slot>
  </div>
</div>
</template>

<script lang="ts">
export default {
  name: "CollapseTime",
  props:{
    title:{
      type:String,
      readable:true
    },
    name:{
      type:String
    }
  },
 data(){
    return {
      show:false
    }
 },
  inject:['eventBus'],
  methods:{
    onClick(){
      if(this.show){
        this.show = false
      }else{
        this.show = true
        this.eventBus.$emit('update:select',this)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$border-color:#ddd;
$border-radius:4px;
.g-collapse-time{
  >.title{
    border: 1px solid $border-color;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    display: flex;
    align-items: center;
    padding:  0 8px;
  }
  &:first-child{
    >.title{
      border-top-right-radius: $border-radius;
      border-top-left-radius: $border-radius;
      margin-bottom: -1px;
    }
  }
  &:last-child{
    >.title:last-child{
      border-bottom-right-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
      margin-bottom: -1px;
    }
  }
  >.content{
    padding: 8px;
  }
}

</style>
