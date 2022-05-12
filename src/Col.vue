<template>
  <div class="g-col" :class="colClass"
       :style="colStyle"
  >
    <div style="border: 1px solid green;height: 100%">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Col",
  data() {
    return {
      gutter: 0
    }
  },
  props: {
    span: {
      type: [String, Number]
    },
    offset: {
      type: [String, Number]
    }
  },
  computed: {
    colClass() {
      const {span, offset} = this
      return [span && `col-${span}`, offset && `offset-${offset}`]
    },
    colStyle() {
      const {gutter} = this
      return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}

    }
  }
};
</script>

<style lang="scss" scoped>
.g-col {
  height: 100px;
  $class-prefix: col-;
  @for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
      width: $n/24*100%;
    }
  }
  $class-offset: offset-;
  @for $n from 1 through 24 {
    &.#{$class-offset}#{$n} {
      margin-left: $n/24*100%;
    }
  }
}

</style>
