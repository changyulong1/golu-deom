<template>
  <div class="g-popover" ref="popover" @click.stop="onClick">
    <div class="wrapper" ref="wrapper" v-if="vsible" @click.stop>
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
      this.vsible=!this.vsible
      if(this.vsible === true){
        this.$nextTick(()=>{
          const {top,left} = this.$refs.popover.getBoundingClientRect()
          const scrollTop = document.documentElement.scrollTop
          const scrollLeft = document.documentElement.scrollLeft
          this.$refs.wrapper.style.top=top+scrollTop+'px'
          this.$refs.wrapper.style.left=left+scrollLeft+'px'
          let eventHandler = ()=>{
            this.vsible =false
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
  border: 1px solid green;

}
.wrapper{
  border: 1px solid red;
  position: absolute;
  transform: translateY(-100%);
}

</style>
