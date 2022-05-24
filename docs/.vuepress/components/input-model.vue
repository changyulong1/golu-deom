<template>
  <div>
    <g-input v-model="value"/>
    <p> value：{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Input from "../../../src/Input";
export default {
  name: "input-model",
  components:{'g-input':Input},
  data(){
    return {
      value:'1'
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
