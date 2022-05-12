<template>
  <div class="g-row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Row",
  props: {
    gutter: {
      type: [String, Number]
    },
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'center'].toString().includes(value);
      }
    }
  },
  computed: {
    rowStyle() {
      const {gutter} = this;
      return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'};
    },
    rowClass() {
      const {align} = this;
      return [align && `align-${align}`];
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
  &.align-left{
    justify-content: flex-end;
  }
  &.align-right{
    justify-content: flex-start;
  }
  &.align-center{
    justify-content: center;
  }
}

</style>
