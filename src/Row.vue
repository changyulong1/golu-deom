<template>
  <div class="g-row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
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
