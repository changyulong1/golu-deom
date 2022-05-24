<template>
  <div>
    <g-row class="demoRow" gutter="10">
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
      <g-col span="8">
        <div class="demoCol">8</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="10">
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
      <g-col span="6">
        <div class="demoCol">6</div>
      </g-col>
    </g-row>
  </div>
</template>

<script>
import Row from "../../../src/Row";
import Col from "../../../src/Col";
export default {
  name: "grid-gutter",
  components:{
    'g-row':Row,
    'g-col':Col,
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin-bottom: 10px;
  .demoCol{
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


</style>
