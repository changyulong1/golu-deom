<template>
<div class="g-tabs">
  <slot></slot>
</div>
</template>

<script>
import Vue from "vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
      readonly: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data () {
    return {
      eventBus: new Vue()
    }
  },
  provide () {
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected', this.selected)
  }
}
</script>

<style lang="scss" scoped>
.g-tabs{

}

</style>
