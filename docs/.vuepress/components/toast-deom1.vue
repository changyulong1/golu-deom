<template>
  <div>
    <g-button @click="onClick">上方弹出</g-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Button from "../../../src/Button";
import MyPlugin from "../../../src/MyPlugin";

Vue.use(MyPlugin);

export default {
  name: "toast-deom",
  components: {'g-button': Button},
  methods: {
    onClick(){
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  z-index: 30;
}
</style>

