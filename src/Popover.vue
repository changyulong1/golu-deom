<template>
  <div class="g-popover" ref="popover" @click="onClick">
    <div class="wrapper" ref="wrapper" v-if="vsible" >
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block;border: 1px solid red">
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
$border-color: #333;
$border-radius: 4px;

.g-popover{
  display: inline-block;
  position: relative;
  vertical-align: top;

}
.wrapper{
  position: absolute;
  border: 1px solid $border-color;
  box-shadow: 0 0 3px rgba(0,0,0,0.4);
  border-radius: $border-radius;
  padding: .5em 1em;
  margin-top: -10px;
  transform: translateY(-100%);
  max-width: 20em;
  word-break: break-all;
  &:before,&:after{
    content: "";
    display: block;
    border: 10px solid transparent;
    position: absolute;
    left: 10px;
  }
  &:before{
    border-top-color:black;
    top: 100%;
  }
  &:after{
    border-top-color:white;
    top:  calc(100% - 1px);
  }
}

</style>
