<template>
  <div class="g-tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper ">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject:['eventBus'],
  mounted(){
    this.eventBus.$on('update:selected',(name,vm)=>{

      let {width, height, top, left} = vm.$el.getBoundingClientRect()
      console.log(width,height,left,top)
      this.$refs.line.style.width= `${width}px`
      this.$refs.line.style.left = `${left}px`
    })

  }
};
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue:blue;
.g-tabs-head{
  display: flex;
  height:$tab-height;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 350ms;
  }
  >.actions-wrapper{
    margin-left: auto;
    margin-right: 1em;
  }

}


</style>
