<template>
  <transition name="g-aside">
    <div class="g-aside" v-if="has">
      <slot></slot>
      <button @click="has=false">点击</button>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  name: "Aside",
  data(){
    return{
      has:true
    }
  }
};
</script>

<style lang="scss" scoped>
.g-aside{

}
.g-aside-enter-active, .g-aside-leave-active {
  transition: margin 1s;
}
.g-aside-enter, .g-aside-leave-to{
  margin-left: -150px;
}

</style>
