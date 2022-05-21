<template>
<div class="g-collapse">
  <slot></slot>
</div>
</template>

<script lang="ts">
import Vue from "vue";
export default {
  name: "Collapse",
  props:{
    single:{
      type:Boolean,
      default:false
    },
    selected:{
      type:Array
    }
  },
  data(){
    return {
      eventBus:new Vue()
    }
  },
  provide(){
    return {
      eventBus:this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addselected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.single) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected',selectedCopy)
    })
    this.eventBus.$on('update:removeSelected', (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index,1)
      this.$emit('update:selected', selectedCopy)
      this.eventBus.$emit('update:selected',selectedCopy)
    })
  }
}
</script>

<style lang="scss" scoped>
$border-color:#ddd;
$border-radius:4px;
.g-collapse{
  border: 1px solid $border-color;
  border-radius: $border-radius;

}

</style>
