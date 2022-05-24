<template>
  <div>
    <g-popover  trigger="hover">
      <g-button>上方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="bottom" trigger="hover">
      <g-button>下方弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="left" trigger="hover">
      <g-button>左边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
    <g-popover position="right" trigger="hover">
      <g-button>右边弹出</g-button>
      <template slot="content">
        弹出内容
      </template>
    </g-popover>
  </div>
</template>

<script >
import Popover from '../../../src/Popover'
import Button from '../../../src/Button'
export default {
  name: "popover-deom1",
  components:{
    'g-popover':Popover,
    'g-button':Button
  }
};
</script>

<style lang="scss" scoped>

</style>
