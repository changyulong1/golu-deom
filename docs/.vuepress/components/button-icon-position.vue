<template>
<div>
  <g-button icon="setup" icon-position="left">设置</g-button>
  <g-button icon="setup" icon-position="right">设置</g-button>
</div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  name: "button-icon-position",
  components:{'g-button':Button}
};
</script>

<style lang="scss" scoped>

</style>
