<template>
  <div class="g-popover" @click.stop="onClick">
    <div class="wrapper" v-if="vsible" @click.stop>
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Popover",
  data(){
    return {
      vsible:false
    }
  },
  methods:{
    onClick(){
      console.log(1)
      this.vsible=!this.vsible
      if(this.vsible === true){
        console.log(2)
        this.$nextTick(()=>{
          console.log(3)
          let eventHandler = ()=>{
            console.log(4)
            this.vsible =false
            console.log(444)
            document.removeEventListener('click',eventHandler)
          }
          document.addEventListener('click',eventHandler)
        })
      }


    }
  }
};
</script>

<style lang="scss" scoped>

.g-popover{
  display: inline-block;
  position: relative;
  >.wrapper{
    border: 1px solid red;
    position: absolute;
    bottom: 100%;
  }
}

</style>
