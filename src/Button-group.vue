<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  //检测子元素是否是g-button
  mounted(){
    for(let node of this.$el.children ){
      const name = node.nodeName.toLowerCase()
      if(name !== 'button'){
        console.warn(`g-button-group的子元素应给是g-button，但是你写的是${name}`)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.g-button-group{
  display: inline-flex;
  vertical-align: middle;
  >.g-button{
    border-radius: 0;
    margin-right: -1px;
    &:first-child{
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }
    &:last-child{
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }
    &:hover{
      position: relative;
      z-index: 1;
    }
  }
}

</style>
