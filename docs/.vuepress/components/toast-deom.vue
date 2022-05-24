<template>
  <div>
    <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
    <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../../../src/Button";
import MyPlugin from "../../../src/MyPlugin";
Vue.use(MyPlugin)

export default {
  name: "toast-deom",
  components:{'g-button':Button}
};
</script>

<style lang="scss">
.wrapper {
  z-index: 30;
}
</style>
