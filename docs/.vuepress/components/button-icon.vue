<template>
  <div>
    <g-button icon="left">上一页</g-button>
    <g-button>更多</g-button>
    <g-button icon="right">下一页</g-button>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  name: "button-icon",
  components: {'g-button': Button}
};
</script>

<style lang="scss" scoped>

</style>
