<template>
  <div class="g-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Row",
  props: {
    gutter: {
      type: [String, Number]
    }
  },
  computed:{
    rowStyle(){
      const {gutter} = this
      return {marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  }
};
</script>

<style lang="scss" scoped>
.g-row {
  display: flex;
  margin: 0 -10px;
}

</style>
