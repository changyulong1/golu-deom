<template>
  <div class="app">
    <g-tabs selected="1">
      <g-tabs-head>
        <g-tabs-time name="1">标签1</g-tabs-time>
        <g-tabs-time name="2">标签2</g-tabs-time>
        <g-tabs-time name="3" disabled>标签2</g-tabs-time>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">内容1</g-tabs-pane>
        <g-tabs-pane name="2">内容2</g-tabs-pane>
        <g-tabs-pane name="3">内容3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import tabs from "../../../src/Tabs";
import tabsHead from "../../../src/TabsHead";
import tabsBody from "../../../src/TabsBody";
import tabsPane from "../../../src/TabsPane";
import tabsTime from "../../../src/TabsTime";
export default {
  name: "tabs-deom",
  components:{
    'g-tabs':tabs,
    'g-tabs-head':tabsHead,
    'g-tabs-body':tabsBody,
    'g-tabs-time':tabsTime,
    'g-tabs-pane':tabsPane
  }
};
</script>

<style lang="scss" scoped>
.app{
  height: 150px;
}

</style>
