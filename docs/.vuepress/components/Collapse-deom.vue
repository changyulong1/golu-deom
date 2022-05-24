<template>
  <div>
    <g-collapse :selected.sync="selected" single>
      <g-collapse-time title="标题1" name="1">内容1</g-collapse-time>
      <g-collapse-time title="标题2" name="2">内容2</g-collapse-time>
      <g-collapse-time title="标题3" name="3">内容3</g-collapse-time>
    </g-collapse>
  </div>
</template>

<script >
import Collapse from '../../../src/Collapse'
import CollapseTime from '../../../src/CollapseTime'
export default {
  name: "Collapse-deom",
  data(){
    return {
      selected:['1']
    }
  },
  components:{
    'g-collapse':Collapse,
    'g-collapse-time':CollapseTime
  }
};
</script>

<style lang="scss" scoped>

</style>
