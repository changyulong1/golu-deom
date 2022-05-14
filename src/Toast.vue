<template>
  <div class="g-toast">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "Toast"
};
</script>

<style lang="scss" scoped>
.g-toast{
  position: fixed;
  top: 0;
  left: 50%;
  border: 1px solid red;
  transform: translateX(-50%);
}

</style>
