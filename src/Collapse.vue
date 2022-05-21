<template>
<div class="g-collapse">
  <slot></slot>
</div>
</template>

<script lang="ts">
export default {
  name: "Collapse"
};
</script>

<style lang="scss" scoped>
$border-color:#ddd;
$border-radius:4px;
.g-collapse{
  border: 1px solid $border-color;
  border-radius: $border-radius;

}

</style>
