<template>
  <div>
    <g-input value="中文"/>
    <g-input value="中文" disabled/>
    <g-input value="中文" readonly/>
  </div>
</template>

<script lang="ts">
import Input from "../../../src/Input";
export default {
  name: "imput-doem",
  components:{'g-input':Input}
};
</script>

<style lang="scss" scoped>

</style>
