<template>
  <div class="g-popover" ref="popover" @click="onClick">
    <div class="wrapper" ref="wrapper" v-if="vsible" >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
       <slot></slot>
    </span>
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
    positionContent(){
      document.body.appendChild(this.$refs.wrapper)
      const {top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
      const scrollTop = document.documentElement.scrollTop
      const scrollLeft = document.documentElement.scrollLeft
      this.$refs.wrapper.style.top=top+scrollTop+'px'
      this.$refs.wrapper.style.left=left+scrollLeft+'px'
    },
    onClickDocument(e){
      // console.log(this.$refs.wrapper.contains(e.target));
     if(this.$refs.triggerWrapper&& (this.$refs.triggerWrapper === e.target || this.$refs.wrapper.contains(e.target))){
       return
     }
     this.clear()
    },
    open(){
      this.vsible=!this.vsible
      this.$nextTick(()=>{
        this.positionContent()
        document.addEventListener('click',this.onClickDocument)
      })
    },
    clear(){
      this.vsible =false
      document.removeEventListener('click',this.onClickDocument)
    },
    onClick(e){
      // this.$refs.wrapper.contains(e.target)
      console.log(6)
      if(e.target===this.$refs.triggerWrapper){
        if(this.vsible === true){
          this.clear()
        }else{
          this.open()
        }
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
