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
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    if (this.$children.length === 0) {
      console && console.warn && console.warn('g-tabs组件只能是g-tabs-head和g-tabs-body两个子组件')
    }
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'TabsHead') {
        vm.$children.forEach((children) => {
          if (children.$options.name === "TabsTime" && children.name === this.selected) {
            this.eventBus.$emit('update:selected', this.selected, children)
          }
        })

      }
    })

  }
}
</script>

<style lang="scss" scoped>
.g-tabs {
  //border: 1px solid #000;
}

</style>
