<template>
  <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <g-aside style=" background:#ddd; width:200px; color: black;">
      sider
    </g-aside>
    <g-layout>
      <g-header style="height: 50px; background:lightskyblue;">
        header
      </g-header>
      <g-content style="height: 100px; background:deepskyblue;">
        content
      </g-content>
      <g-footer style="height: 50px; background:lightskyblue;">
        footer
      </g-footer>
    </g-layout>
  </g-layout>
</template>

<script >
import Layout from "../../../src/Layout";
import Header from "../../../src/Header";
import Content from "../../../src/Content";
import Aside from "../../../src/Aside";
import Footer from "../../../src/Footer";
export default {
  name: "layout-deom2",
  components:{
    'g-layout': Layout,
    'g-header': Header,
    'g-content': Content,
    'g-aside': Aside,
    'g-footer': Footer
  }
};
</script>

<style lang="scss" scoped>

</style>
