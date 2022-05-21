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
    this.eventBus && this.eventBus.$on('update:selected',(name,vm)=>{
      let {width,left} = vm.$el.getBoundingClientRect()
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
  position: relative;
  >.line{
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid $blue;
    transition: all 250ms;
  }
  >.actions-wrapper{
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 1em;
  }

}


</style>
